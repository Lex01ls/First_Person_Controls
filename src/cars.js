import * as THREE from 'three';

//Creating the wheel function
function Wheel(){
    const wheel = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.25, 1.05),
        new THREE.MeshStandardMaterial({ color: 0x333333}),
     

    )
    //positioning the wheel of the car
    wheel.rotation.x = Math.PI / 2;
    wheel.position.set(0, 0.25, -6)
    wheel.castShadow = true;
    return wheel;
}

export function cars(){
    //creating a group to handle all parts of a car
    const car = new THREE.Group();

    const back_wheel = Wheel();
    back_wheel.castShadow = true;
    const front_wheel = Wheel();
    front_wheel.castShadow = true;
    front_wheel.position.x = 0.7;
    back_wheel.position.x = -0.7;

    car.add(front_wheel);
    car.add(back_wheel);

    const main = new THREE.Mesh(
        new THREE.BoxGeometry(2, 0.65, 1),
        new THREE.MeshStandardMaterial({ color: 0xdaf7a6})
    );

    main.castShadow = true;

    main.position.set(0, 0.4 , -6)
    car.add(main);
    

    const cabin = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.85, 0.75),
        new THREE.MeshStandardMaterial({ color: 0xffffff})
    )
    cabin.castShadow = true;
    cabin.position.set(-0.2, 0.7 , -6);
    car.add(cabin);

    car.rotation.y = Math.PI / 2;
    car.position.set(4.8, 0.023, 7)
    car.castShadow = true;

    return car;

}