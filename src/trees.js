import * as THREE from 'three';

const createTreesBranches = () => {
    return new THREE.Mesh(
        new THREE.ConeGeometry(0.5, 1.5, 8),
        new THREE.MeshStandardMaterial({ color: 0x009966 })
    );
    
}

const createTreeLog = () => {
    return new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.15, 1.15, 5),
        new THREE.MeshStandardMaterial({ color: '#996633' })
    );
}

export function trees() {

    const group = new THREE.Group();

    const tree = createTreesBranches();
    tree.position.set(5, 1.8, 0);
    const tree_log = createTreeLog();
    tree_log.position.set(5, 0.58, 0);

    tree.castShadow = true;
    tree_log.castShadow = true;
   
    group.add(tree);
    group.add(tree_log);
    
    const tree2 = createTreesBranches();
    tree2.position.set(-5, 1.8, -0);
    const tree2_log = createTreeLog();
    tree2_log.position.set(-5, 0.58, -0);

    tree2.castShadow = true;
    tree2_log.castShadow = true;


    group.add(tree2);
    group.add(tree2_log);

    return group;
   
}

