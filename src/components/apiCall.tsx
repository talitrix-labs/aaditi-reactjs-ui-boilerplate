import axios, { AxiosError } from 'axios';
import { toast } from '@/components/ui/use-toast'

export async function Post(url: string, data: object, navigate: any) {
  try {
    const response = await axios({ method: 'POST', url: url, data: data, headers: { 'Authorization': 'Barer ' + sessionStorage.getItem('token'), Origin: 'http://localhost:3000' } })
    return response
  }
  catch (error: any) {
    const err = error as AxiosError
    if (err.response) {
      if (err.response.status < 200 || err.response.status >= 300) {
        if (err.response.status === 403 || err.response.status === 401) {
          navigate('/sign-in')
          toast({
            variant: "destructive",
            title: "Please Login Again",
          });
          
          sessionStorage.removeItem('token')
        }
        else if(err.response.status === 422) {
          return null
        }
        else {
          toast({
            variant: "destructive",
            title: "Please Try Again",
          });
        }
      }
    }
    else {
      toast({
            variant: "destructive",
            title: "Please Check Your Network",
          })
    }
    return null
  }
};

export async function Get(url: string, id: string, navigate: any) {
  try {
    const response = await axios({ method: 'GET', url: url + id, headers: { 'Authorization': 'Barer ' + sessionStorage.getItem('token'), Origin: 'http://localhost:3000' } })
    return response
  }
  catch (error: any) {
    const err = error as AxiosError
    if (err.response) {
      if (err.response.status < 200 || err.response.status >= 300) {
        if (err.response.status === 403 || err.response.status === 401) {
          navigate('/sign-in')
          toast({
            variant: "destructive",
            title: "Please Login Again",
          });         
          sessionStorage.removeItem('token')
        }
        else if(err.response.status === 422) {
          return null
        }
        else {
          toast({
            variant: "destructive",
            title: "Please Try Again",
          });
        }
      }
    }
    else {
      toast({
            variant: "destructive",
            title: "Please Check Your Network",
          })
    }
    return null
  }
};

export async function GetAll(url: string, navigate: any) {

  try {
    const response = await axios({ method: 'GET', url: url, headers: { 'Authorization': 'Barer ' + sessionStorage.getItem('token'), Origin: 'http://localhost:3000' } })
    return response
  }
  catch (error: any) {
    const err = error as AxiosError
    if (err.response) {
      if (err.response.status < 200 || err.response.status >= 300) {
        if (err.response.status === 403 || err.response.status === 401) {
          navigate('/sign-in')
          toast({
            variant: "destructive",
            title: "Please Login Again",
          });
          
          sessionStorage.removeItem('token')
        }
        else if(err.response.status === 422) {
          return null
        }
        else {
          toast({
            variant: "destructive",
            title: "Please Try Again",
          });
        }
      }
    }
    else {
      toast({
            variant: "destructive",
            title: "Please Check Your Network",
          })
    }
    return null
  }
};

export async function Put(url: string, id: string, data: object, navigate: any) {
  try {
    const response = await axios({ method: 'put', url: url + id, data: data, headers: { 'Authorization': 'Barer ' + sessionStorage.getItem('token'), Origin: 'http://localhost:3000' } })
    return response
  }
  catch (error: any) {
    const err = error as AxiosError
    if (err.response) {
      if (err.response.status < 200 || err.response.status >= 300) {
        if (err.response.status === 403 || err.response.status === 401) {
          navigate('/sign-in')
          toast({
            variant: "destructive",
            title: "Please Login Again",
          });
          sessionStorage.removeItem('token')
        }
        else if(err.response.status === 422) {
          return null
        }
        else {
          toast({
            variant: "destructive",
            title: "Please Try Again",
          });
        }
      }
    }
    else {
      toast({
            variant: "destructive",
            title: "Please Check Your Network",
          })
    }
    return null
  }
};

export async function Delete(url: string, id: string, navigate: any) {

  try {
    const response = await axios({ method: 'delete', url: url + id, headers: { 'Authorization': 'Barer ' + sessionStorage.getItem('token'), Origin: 'http://localhost:3000' } })
    return response
  }
  catch (error: any) {
    const err = error as AxiosError
    if (err.response) {
      if (err.response.status < 200 || err.response.status >= 300) {
        if (err.response.status === 403 || err.response.status === 401) {
          navigate('/sign-in')
          toast({
            variant: "destructive",
            title: "Please Login Again",
          });
          sessionStorage.removeItem('token')
        }
        else if(err.response.status === 422) {
          return null
        }
        else {
          toast({
            variant: "destructive",
            title: "Please Try Again",
          });
        }
      }
    }
    else {
      toast({
            variant: "destructive",
            title: "Please Check Your Network",
          })
    }
    return null
  }
};
