document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.querySelector('.curso');
    const formElement = document.querySelector('.person-form');


    const loadOptions = async () => {
        try {
            const response = await fetch('../assets/options.json');
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            const data = await response.json();
            populateSelect(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const populateSelect = (data) => {
        data.options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.label;
            selectElement.appendChild(optionElement);
        });
    };

    formElement.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(formElement);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log(formObject);
    });

    loadOptions();
});