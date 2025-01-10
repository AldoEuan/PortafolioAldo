import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { GalleryDialogComponent } from '../gallery-dialog/gallery-dialog.component';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent implements OnInit{
  imagesSet1: string[] = ['https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128297/Interadmin/logininteradmin_vz5yt1.png', 'https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128292/Interadmin/inter_juqnvb.png', 'https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128294/Interadmin/interadmin_na4j3t.png'];
  imagesSet2: string[] = ['https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128303/Administrador%20de%20licencias/Captura_de_pantalla_2024-01-15_173353_ycbpep.png', 'https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128298/Administrador%20de%20licencias/Captura_de_pantalla_2024-01-15_171456_-_copia_pdfnbq.png', 'https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128308/Administrador%20de%20licencias/Captura_de_pantalla_2024-01-15_175747_-_copia_cohnuz.png','https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128306/Administrador%20de%20licencias/Captura_de_pantalla_2024-01-15_174322_-_copia_rbgacj.png'];
  imagesSet3: string[] = ['https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128315/AppFood/png_ok5bgm.png','https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128318/AppFood/Screenshot_20230614-100545_slgqsn.png','https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128323/AppFood/Screenshot_20230614-100900_l83gxo.png','https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128348/AppFood/Screenshot_20230614-100944_dgaqc6.png','https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128350/AppFood/Screenshot_20230614-101013_m7lnxt.png']
  imagesSet4: string[] = ['https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128328/Plenum%20App/Captura_de_pantalla_2023-07-10_151228_ghjtkr.png','https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128332/Plenum%20App/Captura_de_pantalla_2023-07-10_151951_cjop70.png','https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128340/Plenum%20App/Captura_de_pantalla_2023-07-10_152031_llmbxe.png','https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128342/Plenum%20App/Captura_de_pantalla_2023-07-10_151351_cj62mp.png','https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128337/Plenum%20App/Captura_de_pantalla_2023-07-10_151521_ygbrxr.png','https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128335/Plenum%20App/Captura_de_pantalla_2023-07-10_151633_tsbaxh.png','https://res.cloudinary.com/dnahwx3vs/image/upload/v1711128330/Plenum%20App/Captura_de_pantalla_2023-07-10_151554_bodvxt.png']
  imagesSet5: string[] = ['https://res.cloudinary.com/dnahwx3vs/image/upload/v1736465527/ModuloCotizacionesDIAVAZ/vzaoeygkbprneuyzgrzs.jpg','https://res.cloudinary.com/dnahwx3vs/image/upload/v1736465527/ModuloCotizacionesDIAVAZ/u9k5gicutw1setvrqdd9.jpg','https://res.cloudinary.com/dnahwx3vs/image/upload/v1736465527/ModuloCotizacionesDIAVAZ/vtz7avahf6zfncqoqjgl.jpg','https://res.cloudinary.com/dnahwx3vs/image/upload/v1736465526/ModuloCotizacionesDIAVAZ/cxgtilpfbfkdyldaxcln.jpg' ]
  constructor(public dialog:MatDialog){

  }

  ngOnInit(): void {
     
  }

 
  openImageDialog(imageURL: string): void {
    this.dialog.open(ImageDialogComponent, {
      width: 'auto',
      data: { imageURL }
    });
  }
  openGalleryDialog(images: string[]): void {
    this.dialog.open(GalleryDialogComponent, {
      width: 'auto',
      data: { images: images }
    });
  }

}
