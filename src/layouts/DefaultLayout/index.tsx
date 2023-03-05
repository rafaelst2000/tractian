import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Loader } from '../../components/Loader/index.'
import { SideMenu } from '../../components/SideMenu'
import { useAsset } from '../../hooks/useAsset'
import { useCompany } from '../../hooks/useCompany'
import { useUnit } from '../../hooks/useUnit'
import { useUser } from '../../hooks/useUser'
import { useWorkorder } from '../../hooks/useWorkorder'
import { LayoutContainer, BaseContainer } from './styles'

export function DefaultLayout() {
  const { loadingAssets } = useAsset()
  const { loadingCompanies } = useCompany()
  const { loadingUnits } = useUnit()
  const { loadingUsers } = useUser()
  const { loadingWorkorders } = useWorkorder()
  const isLoading =
    loadingAssets ||
    loadingUnits ||
    loadingWorkorders ||
    loadingUsers ||
    loadingCompanies

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <LayoutContainer>
          <SideMenu />
          <BaseContainer>
            <Header />
            <Outlet />
          </BaseContainer>
        </LayoutContainer>
      )}
    </>
  )
}
