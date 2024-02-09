const remainingTime = document.querySelector('.remaining-time');

const zDateTime = (zDate) => {
    const now = new Date();
    const nowInRomania = new Date(now.getTime());
    const targetDate = new Date(zDate);
    const timeDifference = targetDate.getTime() - nowInRomania.getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

const updateRemainingTime = () => {
    const date = zDateTime('2024-04-06T16:00:00');
    remainingTime.innerHTML = `<div><span>${date.days}</span><span>zile</span></div>
                                <div><span>${date.hours}</span><span>ore</span></div>
                                <div><span>${date.minutes}</span><span>minute</span></div>
                                <div><span>${date.seconds}</span><span>secunde</span></div>`;
}

updateRemainingTime();
setInterval(updateRemainingTime, 1000);


const directionElem = document.querySelectorAll('.direction a');

directionElem.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openLinkWithApp(link.getAttribute('href'));
    });
});

const openLinkWithApp = (url) => {
    if (navigator.registerProtocolHandler) {
        try {
            navigator.registerProtocolHandler('protocol', url, 'Your App Name');
            window.location('protocol://', '_blank');
        } catch (error) {
            window.open(url, '_blank');
        }
    } else {
        window.location.href = url;
    }
}