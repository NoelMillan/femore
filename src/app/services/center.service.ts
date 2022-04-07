import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  centers = [
    {location: "Málaga", name: "Centro Comercial Rosaleda", img: "../../../assets/images/rosaleda.jpg", mapLat: 36.7344041156246, mapLng: -4.43203063804713, mapNorth: 36.7360270215766, mapSouth: 36.73348194594511, mapWest: -4.4341764046988015, mapEast: -4.430324752844465},
    {location: "Málaga", name: "Larios Centro", img: "../../../assets/images/larios.jpg", mapLat: 36.71515689810945, mapLng: -4.432640261242345, mapNorth: 36.716519272529474, mapSouth: 36.71447694095379, mapWest: -4.434691022786612, mapEast: -4.430420946381719},
    {location: "Málaga", name: "María Zambrano", img: "../../../assets/images/mariazam.jpg", mapLat: 36.71212931301063, mapLng: -4.432708022984081, mapNorth: 36.71279694422821, mapSouth: 36.7108875679759, mapWest: -4.434480963083894, mapEast: -4.43098336278031,},
    {location: "Málaga", name: "Málaga Plaza", img: "../../../assets/images/malagaplaza.jpg", mapLat: 36.71854422499465, mapLng: -4.428743458984462, mapNorth: 36.71891725098258, mapSouth: 36.71814754695911, mapWest: -4.429253078651323, mapEast: -4.428118504330174},
    {location: "Sevilla", name: "Nervión Plaza", img: "../../../assets/images/nervionplaza.jpg", mapLat: 37.38418792970983, mapLng: -5.972187288525878, mapNorth: 37.38531321363682, mapSouth: 37.38283245167344, mapWest: -5.9729624468525335, mapEast: -5.971492596431753},
    {location: "Sevilla", name: "Centro Comercial Torre Sevilla", img: "../../../assets/images/torresevilla.jpg", mapLat: 37.39144390394854, mapLng: -6.010150680226953, mapNorth: 37.3943420477723, mapSouth: 37.39072787468792, mapWest: -6.011298665455281, mapEast: -6.0080370995232215},
    {location: "Sevilla", name: "Centro Comercial Los Arcos", img: "../../../assets/images/losarcos.jpg", mapLat: 37.388253088966096, mapLng: -5.960402015797273, mapNorth: 37.38942093363187, mapSouth: 37.38740063612886, mapWest: -5.961743120187951, mapEast: -5.959114555566849},
    {location: "Sevilla", name: "Plaza de Armas", img: "../../../assets/images/plazalasarmas.jpg", mapLat: 37.3916026698417, mapLng: -6.00253099305932, mapNorth: 37.39225902259445, mapSouth: 37.390967621773115, mapWest: -6.003233731768503, mapEast: -6.001645864160654},
    {location: "Granada", name: "Serrallo Plaza", img: "../../../assets/images/serrallo.jpg", mapLat: 37.156635951958116, mapLng: -3.5843761464683315, mapNorth: 37.15808101416741, mapSouth: 37.15625116742332, mapWest: -3.585070838546766, mapEast: -3.582023849353325},
    {location: "Granada", name: "Centro Comercial Neptuno", img: "../../../assets/images/neptuno.jpg", mapLat: 37.16877076728019, mapLng: -3.607257256308186, mapNorth: 37.169164037416536, mapSouth: 37.16733445894979, mapWest: -3.608432063761291, mapEast: -3.606297025558845},
    {location: "Granada", name: "Centro Comercial Nevada", img: "../../../assets/images/nevada.jpg", mapLat: 37.14544351128165, mapLng: -3.6157694185031666, mapNorth: 37.14921485428933, mapSouth: 37.14368177640658, mapWest: -3.6166062676478443, mapEast: -3.610576662177981},
    {location: "Almería", name: "Centro Comercial Torrecárdenas", img: "../../../assets/images/torrecardenas.jpg", mapLat: 36.861199687541045, mapLng: -2.434761851292355, mapNorth: 36.86197224775298, mapSouth: 36.859255376406765, mapWest: -2.438012688354371, mapEast: -2.433855264690201},
    {location: "Almería", name: "Centro Comercial Mediterráneo", img: "../../../assets/images/mediterraneo.jpg", mapLat: 36.85517118717841, mapLng: -2.4463045733379607, mapNorth: 36.85542014373841, mapSouth: 36.85263006692866, mapWest: -2.448654188244171, mapEast: -2.4460363524687123},
    {location: "Almería", name: "Centro Comercial Oliveros", img: "../../../assets/images/olivero.jpg", mapLat: 36.83467582020675, mapLng: -2.4620095624480873, mapNorth: 36.83480033195785, mapSouth: 36.834016763249515, mapWest: -2.4626479281417835, mapEast: -2.4612907304904796},
  ]

  constructor() { }
}
