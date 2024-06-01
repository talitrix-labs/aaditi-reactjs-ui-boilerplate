//For reference 
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { apiURL } from '@/config';
import { toast } from '@/components/ui/use-toast'

export const _login = createAsyncThunk('user/_login', async (data: any) => {
    try {
        const response = await axios(
            {
                method: 'POST',
                url: apiURL + '/user/login',
                data: data.request,
                headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') },
            })
        return response
    } catch (error: any) {
        const err = error;
        if (err.response) {

            if (err.response.status < 200 || err.response.status >= 300) {
                if (err.response.status === 401 || err.response.status === 402) {
                    data.history('/LoginScreens/default-login');
                    toast({
                        variant: "destructive",
                        title: "Please Login Again",
                    });
                } else if (err.response.status === 422) {
                    toast({
                        variant: "destructive",
                        title: err.response?.data?.error || 'Please Try Again',
                    });
                } else {
                    toast({
                        variant: "destructive",
                        title: 'Please Try Again',
                    });
                }
            }
        } else {
            toast({
                variant: "destructive",
                title: 'Please Check Your Network',
            });
        }
        return error.response;
    }
})