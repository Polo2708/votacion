import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRouterGuard from '../guards/protected-routes'
import HomeView from '../modules/home/view/home-view'
import AuthView from '../modules/auth/view/auth-view'
import AuthRouterGuard from '../guards/auth-router'
import { MainLayout } from '../layouts/main-layout'
import { AuthLayout } from '../layouts/auth-layout'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRouterGuard />}>
                    <Route element={<MainLayout />}>
                        <Route path='/' element={<HomeView />} />
                        <Route path='/votacion' element={<div>Hola mundo</div>} />
                    </Route>
                </Route>

                <Route element={<AuthLayout />}>
                    <Route element={<AuthRouterGuard />}>
                        <Route path='/auth' element={<AuthView />} />
                    </Route>
                </Route>

                <Route path='/404' element={<h1>error</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
