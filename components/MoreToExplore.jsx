import React from "react";
import ExploreCard from "./ExploreCard";

const cards = [
  {
    title: "Fortnite",
    logo: "https://www.lego.com/cdn/cs/catalog/assets/bltbb1d19a700e0dec0/1/Theme_Icon_AID2309469P4GL.png?quality=80&format=webply&width=256",
    character:
      "https://www.lego.com/cdn/cs/catalog/assets/blt0d262ef47b988599/1/MicrosoftTeams-image_(10).png?quality=80&format=webply&width=256",
    bg: "bg-gradient-to-b from-cyan-600 to-blue-800",
  },
  {
    title: "Sonic",
    logo: "https://www.lego.com/cdn/cs/catalog/assets/blt9fd83217dda7ecee/1/Sonic_dbixthemelogo.png?quality=80&format=webply&width=256",
    character:
      "https://www.lego.com/cdn/cs/catalog/assets/bltca3ce8bf066fe3cd/1/AID2306197P4GL_SONIC_GroupTheme_SignatureCharacter_578x700.png?quality=80&format=webply&width=256",
    bg: "bg-gradient-to-b from-cyan-600 to-blue-800",
    bgImg:
      "https://www.lego.com/cdn/cs/catalog/assets/blt4e2c9a5972b9d9b2/1/AID2306197P4GL_SONIC_GroupTheme_ThemeBackground_800x800.jpg?crop=9%3A16&quality=80&format=webply&width=256",
  },

  {
    title: "Minecraft",
    logo: "https://www.lego.com/cdn/cs/catalog/assets/blt9989578585865ee0/2/Minecraft.png?quality=80&format=webply&width=256",
    character:
      "https://www.lego.com/cdn/cs/catalog/assets/bltee330426b36a647c/1/Minecraft.png?quality=80&format=webply&width=256",
    bg: "bg-gradient-to-b from-cyan-600 to-blue-800",
    bgImg:
      "https://www.lego.com/cdn/cs/catalog/assets/bltf60783ffa96f8499/1/Background_Minecraft.jpg?crop=9%3A16&quality=80&format=webply&width=256",
  },

  {
    title: "Super Mario",
    logo: "https://www.lego.com/cdn/cs/catalog/assets/blt033e43bcbf3f60c7/1/Theme_Logo_SuperMario.png?quality=80&format=webply&width=256",
    character:
      "https://www.lego.com/cdn/cs/catalog/assets/bltf7eac0a637844c63/1/Signature_Character_SuperMario.png?quality=80&format=webply&width=256",
    bg: "bg-gradient-to-b from-yellow-300 to-yellow-400",
  },
];

const MoreToExplore = () => {
  return (
    <div className="relative w-full h-full bg-pink-100 pb-12">
      <h1 className="font-black text-slate-800 text-5xl uppercase text-center py-12">
        More To Explore
      </h1>

      <div className="container flex w-10/12 mx-auto flex-wrap gap-4 justify-center ">
        {/* <ExploreCard
          logoImg={
            
          }
          characterImg={
            
          }
          bgColor={"bg-gradient-to-b from-cyan-600 to-blue-800"}
        /> */}
        {cards.map((item) => {
          return (
            <ExploreCard
              logoImg={item.logo}
              characterImg={item.character}
              bgColor={item.bg}
              bgImg={item.bgImg ? item.bgImg : null}
              title={item.title}
              key={item}
            />
          );
        })}
        <div className="relative outline-purple-500 outline-2 outline w-64 h-[26rem] rounded-2xl shrink-0">
          <button className="p-4 bg-purple-400 text-white rounded-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            View all
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreToExplore;
