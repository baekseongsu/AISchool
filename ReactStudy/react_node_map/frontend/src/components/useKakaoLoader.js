import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

const useKakaoLoader = () => {
  useKakaoLoaderOrigin({
    appkey: "39e5707783bc159402036c221189eeb2",
    libraries: ["clusterer", "drawing", "services"],
  });
};

export default useKakaoLoader;
