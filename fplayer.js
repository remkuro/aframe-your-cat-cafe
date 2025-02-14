class FPlayer{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    // this.walk = false;
    scene = document.querySelector("a-scene");
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src","http://127.0.0.1:8000/Retro_Survivors/Female Survivor 1 .glb");
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    this.obj.setAttribute("scale",{x:.1,y:.1,z:.1});
    this.obj.setAttribute("rotation",{x:0, y:180, z:0});

    // camera.setAttribute()
    scene.append(this.obj);
    
 
  //   this.obj.addEventListener("keypress",(e)=>{
  //     if(e.key=="a"){
  //       this.walk = true;
  //     }
  //   })
    

  //   if(this.walk){
  //     this.x += 2000;
  //     this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  //   }
  // }


  // roam(){
  //   this.x += this.dx;
  //   // this.z += this.dz;
  //   if(this.x < -15 || this.x > 15){
  //     this.dx = -this.dx;
  //     // this.ry = -this.ry;
  //   }
  //   // this.z += this.dz;
  //   // if(this.z < -25 || this.z > 25){
  //   //   this.dz = -this.dz;
  //   // }
  //   this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  //   // this.obj.setAttribute("rotation",{x:0, y:this.ry, z:0});
  // }
  }
}