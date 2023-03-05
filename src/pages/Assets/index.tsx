import { Table, Input } from 'antd';
import { useUnit } from "../../hooks/useUnit";
import { useCompany } from "../../hooks/useCompany";
import { useState } from "react";
import { AssetsContainer, SensorStatus } from "./styles";
import { Asset } from '../../@types';
import { useAsset } from '../../hooks/useAsset';

interface AssetTableData extends Asset {
  key: number
  company: string
}

export function Assets() {
  const { assets } = useAsset()
  const { getCompanyNameById } = useCompany()

  const tableData = assets.map(asset => {
    return {
      ...asset,
      key: asset.id,
      company: getCompanyNameById(asset.companyId)
    }
  }) as AssetTableData[]

  const getAssetStatus = (status: 'inAlert' | 'inDowntime' | 'inOperation') => {
    const allStatus = {
      'inAlert': 'Em alerta',
      'inDowntime': 'Em parada',
      'inOperation': 'Em operação',
    }
    return allStatus[status]
  }

  return(
    <AssetsContainer >
       <Table dataSource={tableData}>
        <Table.Column width={'50px'} title="Imagem" dataIndex="image" key="image" render={(_: any, record: AssetTableData) => (
          <div>
            <img src={record.image} />
          </div>
        )}/>
        <Table.Column title="Nome" dataIndex="name" key="name" />
        <Table.Column title="Empresa" dataIndex="company" key="company" />
        <Table.Column title="Saúde (%)" dataIndex="healthscore" key="healthscore" />
        <Table.Column title="Coletas" dataIndex="metrics.totalCollectsUptime" key="metrics.totalCollectsUptime" render={(_: any, record: AssetTableData) => (
          <span>{record.metrics.totalCollectsUptime}</span>
        )} />
        <Table.Column title="Tempo ativo" dataIndex="metrics.totalUptime" key="metrics.totalUptime" render={(_: any, record: AssetTableData) => (
          <span>{record.metrics.totalUptime.toFixed(2)}</span>
        )} />
        <Table.Column title="Sensor(es)" dataIndex="sensors" key="sensors" render={(_: any, record: AssetTableData) => (
          <span>{record.sensors.join(', ')}</span>
        )} />
        <Table.Column title="Status" dataIndex="status" key="status" render={(_: any, record: AssetTableData) => (
          <SensorStatus status={record.status}>{getAssetStatus(record.status)}</SensorStatus>
        )} />
      </Table>
    </AssetsContainer>
  )
}