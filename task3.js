console.log(`
########################################################################################################################

TASK 3

########################################################################################################################
`);

const DEFAULT_BOTTLES = 50;

function showMessage(bottlesLeft) {
    if (bottlesLeft < 0) {
        return
    }

    if (bottlesLeft === 0) {
        console.log('жодної!');
        return
    }

    console.log(`${bottlesLeft} стоїть на стіні, одна упала і залишилось`)
}



for (let i = DEFAULT_BOTTLES; i >= 0; i--) {
    showMessage(i)
}

