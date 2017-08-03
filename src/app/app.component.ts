import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild('glElement') glElement : ElementRef;
  canvasElement : HTMLCanvasElement;

  ngAfterViewInit() {
    this.canvasElement = this.glElement.nativeElement;

    let w = this.canvasElement.clientWidth;
    let h = this.canvasElement.clientHeight;

    let scene = new THREE.Scene();
    let camera = new THREE.OrthographicCamera(-1.0, 1.0, 1.0, -1.0);

    let rendererParameters = <THREE.WebGLRendererParameters>({
      canvas: this.canvasElement
    });
    let renderer = new THREE.WebGLRenderer(rendererParameters);
    renderer.setSize( w, h );
    
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;

      renderer.render(scene, camera);
    };

    animate();
  }


}
