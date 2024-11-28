import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import ProductPage from '../pages/ProductPage';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ShippingPage from '../pages/ShippingPage';
//import About from '../pages/About';  

import PrivateRoute from '../components/PrivateRoute';
import PaymentPage from '../pages/PaymentPage';
import PlaceOrderPage from '../pages/PlaceOrderPage';
import OrderDetailsPage from '../pages/OrderDetailsPage';
import ProfilePage from '../pages/ProfilePage';
import AdminRoute from '../components/AdminRoute';
import OrderListPage from '../pages/admin/OrderListPage';
import ProductListPage from '../pages/admin/ProductListPage';
import UserListPage from '../pages/admin/UserListPage';
//import CreateProductPage from '../pages/admin/CreateProductPage';
//import UpdateProductPage from '../pages/admin/UpdateProductPage';
import ProductFormPage from '../pages/admin/ProductFormPage';
import UpdateUserFormPage from '../pages/admin/UpdateUserFormPage';
import NotFoundPage from '../pages/NotFoundPage';
import AdminDashboard from '../AdminDashboard';
import AdminLoginPage from '../pages/admin/AdminLoginPage';

import AdminProfilePage from '../pages/admin/AdminProfilePage';
import AdminListPage from '../pages/admin/AdminListPage';
import ResetPasswordRequestPage from '../pages/ResetPasswordRequestPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
      

          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="reset-password" element={<ResetPasswordRequestPage />} />
          <Route path="reset-password/:id/:token" element={<ResetPasswordPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="shipping" element={<ShippingPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="place-order" element={<PlaceOrderPage />} />
            <Route path="order/:id" element={<OrderDetailsPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Route>

        <Route path="/admin/login" element={<AdminLoginPage />} />

        <Route element={<AdminRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/order-list" element={<OrderListPage />} />
          <Route path="/admin/product-list" element={<ProductListPage />} />
          <Route path="/admin/user-list" element={<UserListPage />} />
          <Route path="/admin/product/create" element={<ProductFormPage />} />
          <Route path="/admin/profile" element={<AdminProfilePage />} />
          <Route path="/admin/admin-list" element={<AdminListPage />} />
          <Route path="/admin/order/:id" element={<OrderDetailsPage />} />
          <Route path="/admin/user/update/:id" element={<UpdateUserFormPage />} />
          <Route path="/admin/product/update/:id" element={<ProductFormPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
