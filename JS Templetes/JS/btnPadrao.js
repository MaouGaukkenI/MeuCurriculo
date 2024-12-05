document.addEventListener('DOMContentLoaded', function () {

    //collors:
    const primary = '#F4F4F9';
    const secondary = '#333333';
    const success = 'rgb(74, 144, 226)';
    const success2 = 'rgb(165, 200, 241)';

    const fontSizes = {
        fs0_5: '0.5vh',  // Novo valor fs0_5
        fs1: '1vh',
        fs1_5: '1.5vh',
        fs2: '2vh',
        fs2_5: '2.5vh',
        fs3: '3vh',
        fs3_5: '3.5vh',
        fs4: '4vh',
        fs4_5: '4.5vh',
        fs5: '5vh',
        fs5_5: '5.5vh',
        fs6: '6vh',
        fs6_5: '6.5vh',
        fs7: '7vh',
        fs7_5: '7.5vh',
        fs8: '8vh',
        fs8_5: '8.5vh',
        fs9: '9vh',
        fs9_5: '9.5vh',
        fs10: '10vh'
    };

    const borderRadius = {
        fs0_5: '.25vh',
        fs1: '.5vh',
        fs1_5: '.75vh',
        fs2: '1vh',
        fs2_5: '1.25vh',
        fs3: '1.5vh',
        fs3_5: '1.75vh',
        fs4: '2vh',
        fs4_5: '2.25vh',
        fs5: '2.5vh',
        fs5_5: '2.75vh',
        fs6: '3vh',
        fs6_5: '3.25vh',
        fs7: '3.5vh',
        fs7_5: '3.75vh',
        fs8: '4vh',
        fs8_5: '4.25vh',
        fs9: '4.5vh',
        fs9_5: '4.75vh',
        fs10: '5vh'
    };


    const border = {
        fs0_5: '.25vh',
        fs1: '.3vh',
        fs1_5: '.35vh',
        fs2: '.4vh',
        fs2_5: '.45vh',
        fs3: '.5vh',
        fs3_5: '.55vh',
        fs4: '.6vh',
        fs4_5: '.65vh',
        fs5: '.7vh',
        fs5_5: '.75vh',
        fs6: '.8vh',
        fs6_5: '.85vh',
        fs7: '.9vh',
        fs7_5: '.95vh',
        fs8: '1vh',
        fs8_5: '1.05vh',
        fs9: '1.1vh',
        fs9_5: '1.15vh',
        fs10: '1.2vh'
    };


    const btnStyle1 = document.querySelectorAll('.btnStyle1');

    let counter1 = 1;

    btnStyle1.forEach(function (v) {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = 'btnTeste';
        button.style.backgroundColor = primary;
        button.style.color = secondary;
        button.style.fontFamily = "'Poppins', sans-serif";
        button.style.borderColor = success;
        button.style.cursor = 'pointer';

        button.id = 'btnS1-' + counter1;
        counter1++;

        for (const [key, value] of Object.entries(fontSizes)) {
            if (v.classList.contains(key)) {
                button.style.fontSize = value;
                button.style.padding = '.5vh ' + value;

                break;
            }
        }
        for (const [key, value] of Object.entries(border)) {
            if (v.classList.contains(key)) {
                button.style.border = value + ' solid ' + success;

                break;
            }
        }

        for (const [key, value] of Object.entries(borderRadius)) {
            if (v.classList.contains(key)) {
                button.style.borderRadius = value;

                break;
            }
        }

        // Evento mouseenter para aumentar e mudar o fundo
        button.addEventListener('mouseenter', function () {
            button.style.transform = 'scale(1.1)'; // Aumenta o tamanho do botão
            button.style.backgroundColor = success2; // Muda a cor de fundo
        });

        // Evento mouseleave para restaurar o estilo original
        button.addEventListener('mouseleave', function () {
            button.style.transform = 'scale(1)'; // Restaura o tamanho original
            button.style.backgroundColor = primary; // Restaura a cor original do fundo
        });
        v.appendChild(button);
    });

    const btnStyle2 = document.querySelectorAll('.btnStyle2');

    let counter2 = 1;

    btnStyle2.forEach(function (v) {
        const button = document.createElement('button');
        button.type = 'submit';
        button.textContent = 'btnTeste';
        button.style.backgroundColor = primary;
        button.style.color = secondary;
        button.style.fontFamily = "'Poppins', sans-serif";
        button.style.borderColor = success;
        button.style.cursor = 'pointer';

        button.id = 'btnS2-' + counter2;
        counter2++;

        for (const [key, value] of Object.entries(fontSizes)) {
            if (v.classList.contains(key)) {
                button.style.fontSize = value;
                button.style.padding = '.5vh ' + value;

                break;
            }
        }
        for (const [key, value] of Object.entries(border)) {
            if (v.classList.contains(key)) {
                button.style.border = value + ' solid ' + success;

                break;
            }
        }

        for (const [key, value] of Object.entries(borderRadius)) {
            if (v.classList.contains(key)) {
                button.style.borderRadius = value;

                break;
            }
        }

        // Evento mouseenter para aumentar e mudar o fundo
        button.addEventListener('mouseenter', function () {
            button.style.transform = 'scale(1.1)'; // Aumenta o tamanho do botão
            button.style.backgroundColor = success2; // Muda a cor de fundo
        });

        // Evento mouseleave para restaurar o estilo original
        button.addEventListener('mouseleave', function () {
            button.style.transform = 'scale(1)'; // Restaura o tamanho original
            button.style.backgroundColor = primary; // Restaura a cor original do fundo
        });
        v.appendChild(button);
    });
});
