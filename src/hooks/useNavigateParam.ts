import { useNavigate, createSearchParams, URLSearchParamsInit } from "react-router-dom";

const useNavigateParams = () => {
  const navigate = useNavigate();

  return (pathname: string, params?: URLSearchParamsInit) => {
    const path = {
      pathname,
      search: params ? createSearchParams(params).toString() : ''
    };
    console.log('path ', path)
    navigate(path);
  };
};

export default useNavigateParams