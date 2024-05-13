import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import html2canvas from 'html2canvas';
import { icons } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';

function LogoPreview({ downloadLogo }) {
  const [storageValue, setStorageValue] = useState(null);
  const { updateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = localStorage.getItem('value');
    if (storageData) {
      setStorageValue(JSON.parse(storageData));
    }
  }, [updateStorage]);

  useEffect(() => {
    if (downloadLogo) {
      downloadLogoPng();
    }
  }, [downloadLogo]);

  const downloadLogoPng = () => {
    const downloadLogoDiv = document.getElementById('downloadLogoDiv');
    if (!downloadLogoDiv) return;

    html2canvas(downloadLogoDiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const img = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = img;
      link.download = 'AnkitRajput_Logo_Maker.png';
      link.click();
    });
  };

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];

    if (!LucidIcon) {
      return null;
    }

    return <LucidIcon color={color} size={size} style={{ transform: `rotate(${rotate}deg)` }} />;
  };

  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='h-500 w-500 bg-gray-200 outline-dotted outline-gray-300' style={{ padding: `${storageValue?.bgPadding}px` }}>
        <div id="downloadLogoDiv" className='h-full w-full flex justify-center items-center' style={{ borderRadius: `${storageValue?.bgRounded}px`, background: storageValue?.bgColor, width: `${storageValue?.iconSize}px` }}>
          {storageValue && <Icon name={storageValue.icon} color={storageValue.iconColor} rotate={storageValue.iconRotate} size={storageValue.iconSize} />}
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;
