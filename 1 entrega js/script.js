'use strict';



const poll = {
    question: 'Elige al mvp del partido',
    options: ['0: Burrito Rivero', '1: Nicolas Oroz', '2: El Colo Re', '3: Satanas Paez'],

    registerNewAnswer() {
        //Respuesta
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Elige al MVP!)`));
        console.log(`Elegiste la opcion ${answer}!`)
    }
}

poll.registerNewAnswer();





const contribucion = {
    club: 'Chacarita',
    bonoCode: '2017',
    contribuciones: [],
    pago (ndePago){
        this.contribuciones.push({ndePago: `${this.bonoCode}${ndePago}`})
    }
}

contribucion.bonos = 1;
contribucion.comprarBono = function(){
    console.log(this);
    this.bonos++;
    console.log(this.bonos);
};

document.querySelector('.buy').addEventListener('click', contribucion.comprarBono.bind(contribucion))