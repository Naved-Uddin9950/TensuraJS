export const component = () => {
    const components = document.querySelectorAll('component') ?? null;
    const componentDiv = document.querySelector('div[type=component]') ?? null;

    if(componentDiv != null) {
        componentDiv.style = "position: relative; display: flex; height: 100%; width: 100%; overflow: hidden";
    }

    if(components != null) {
        for(let i=0; i<components.length; i++) {
            let component = components[i];
            let render = component.getAttribute('render');
    
            component.addEventListener('click', () => {
                componentDiv.innerHTML = `<iframe src="${render}" target="${render}"></iframe>`;
                let frame = document.querySelector('iframe');
                frame.style = 'border: none; width: 100%; height: 100%; overflow: hidden';
            });
        }
    }

}