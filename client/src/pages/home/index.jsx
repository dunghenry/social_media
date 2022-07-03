import { useState, useEffect } from 'react';
import './home.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {customAxios} from '../../store/api';
import {loginSuccess} from '../../store/reducers/authSlice';
import { getUsers } from '../../store/api/apiRequest';
const Home = () => {
  const { user } = useSelector((state) => state.auth)
  const accessToken = user?.accessToken;
  const dispatch = useDispatch();
  const axiosCustom = customAxios(user, dispatch, loginSuccess);
  const handleGetdata = () =>{
    getUsers(dispatch, accessToken, axiosCustom);
  }
  return (
    <div>
      <button onClick={handleGetdata}>Get Users</button>
    </div>
  )
}

export default Home