import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Smile, icons } from "lucide-react";
import { iconList } from "@/constants/Icons";
import { ColorIconsList } from "@/constants/ColorIcons";
import axios from "axios";

function IconList({ selectedIcon }) {
  const BASE_URL = "https://logoexpress.tubeguruji.com";
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [icon, setIcon] = useState(storageValue ? storageValue.icon : "Smile");
  const [openDialog, setOpenDialog] = useState(false);
  const [colorIcon, setColorIcon] = useState([]);
  useEffect(() => {
    getIcons();
  }, [colorIcon]);

  const getIcons = async () => {
    axios.get(BASE_URL + "/getIcons.php").then((resp) => {
      setColorIcon(resp.data);
    });
  };
  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];

    if (!LucidIcon) {
      return null;
    }

    return <LucidIcon color={color} size={size} />;
  };

  return (
    <div>
      <div>
        <label>Icon</label>
        <div
          onClick={() => setOpenDialog(true)}
          className="p-3 cursor-pointer bg-gray-300 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center"
        >
          <Icon key={icon} name={icon} color={"#000"} size={20} />
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pick Your Favorite Icon For Your Logo</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="icons" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="icons">Icons</TabsTrigger>
                  <TabsTrigger value="colorIcons">ColorIcons</TabsTrigger>
                </TabsList>
                <TabsContent value="icons">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 overflow-auto h-[400px] p-6">
                    {iconList.map((iconItem) => (
                      <div
                        key={iconItem}
                        className="border p-3 flex rounded-md items-center cursor-pointer justify-center"
                        onClick={() => {
                          selectedIcon(iconItem);
                          setOpenDialog(false);
                          setIcon(iconItem);
                        }}
                      >
                        <Icon name={iconItem} color={"#000"} size={20} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="colorIcons"> 
                <h2 className="text-black font-bold font-serif "> <span className="text-red-500">Bug in ColorFull logo </span> , In Future Sure I Fix It !</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 overflow-auto h-[400px] p-6">
                 
                    {ColorIconsList.map((iconItem, index) => (
                      <div
                        key={index}
                        className="border p-3 flex rounded-md items-center cursor-pointer justify-center"
                        onClick={() => {
                          selectedIcon(iconItem);
                          setOpenDialog(false);
                        }}
                      >
                        <span role="img" aria-label="emoji">
                          {iconItem}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IconList;
