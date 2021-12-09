import React from "react";
import "./style.scss";
import curatorPhoto from "../../images/janaina-scher.png"

function CuratorItem() {
    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Imagem curadora Janaína Scher"/>
            </div>
            <div className="curator__details">
                <div>
                    <h3>Janaína Scher</h3>
                    <h6>Curadoria</h6>    
                </div>
                <p>Profissional em transição de carreira para tecnologia, graduada em Administração de Empresas, estudante de tecnologia em Desenvolvimento Web e com interesse de evoluir na carreira Dev Front-end.</p>
            </div>
        </div>
    )
}

export default CuratorItem;