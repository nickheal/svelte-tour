import { register, unregister } from './index';

export function tour(node, parameters){

  register(node, parameters);

  return {
    update(newParameters){
      register(node, newParameters);
    }, 
    destroy(){
      unregister(node);
    }
  };
}