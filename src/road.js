import * as THREE from 'three';
//method to create a marking object
function Marks() {
    const createMarks =  new THREE.Mesh(
        new THREE.PlaneGeometry(0.15, 0.8),
        new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide })
    );
    createMarks.rotation.x = Math.PI /2;
  
    return createMarks;
}

export function road(){

    const road =  new THREE.Group();
    //creating the path
    const path = new THREE.Mesh(
        new THREE.PlaneGeometry(4 , 20),
        new THREE.MeshStandardMaterial({color: 0x696969, side: THREE.DoubleSide })
    )
    const { marking1, marking2, marking3, marking4, marking5, marking6, marking7 } = createMarks();
    
   
    positionMarks(marking1, marking2, marking3, marking4, marking5, marking6, marking7);

    path.rotation.x = Math.PI/2;
    path.position.set(0, 0.01, 0);
    path.receiveShadow = true;
    path.castShadow = false;
    
    road.add(path);
    road.add(marking1 , marking2, marking3, marking4, marking5, marking6, marking7);

    return road;
}

//method to position marks
function positionMarks(marking1, marking2, marking3, marking4, marking5, marking6, marking7) {
    marking1.position.set(0, 0.012, -9);
    marking2.position.set(0, 0.012, -6);
    marking3.position.set(0, 0.012, -3);
    marking4.position.set(0, 0.012, 0);
    marking5.position.set(0, 0.012, 3);
    marking6.position.set(0, 0.012, 6);
    marking7.position.set(0, 0.012, 9);
}
//function to create marks
function createMarks() {
    const marking1 = Marks();
    const marking2 = Marks();
    const marking3 = Marks();
    const marking4 = Marks();
    const marking5 = Marks();
    const marking6 = Marks();
    const marking7 = Marks();
    return { marking1, marking2, marking3, marking4, marking5, marking6, marking7 };
}
