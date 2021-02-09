import React from 'react'

export default function DarkTheme({ isMobile, onClick }) {
    const body = document.body
    let theme = 'light'

    if (localStorage) theme = localStorage.getItem('dark')
    if (theme === 'dark') body.classList.add('dark')

    const switchTheme = () => {
        if (theme === 'dark' || theme === 'true') {
            body.classList.replace('dark', 'light')
            localStorage.removeItem('dark')
            theme = 'light'
        }
        else {
            body.classList.replace('light', 'dark')
            localStorage.setItem('dark', 'true')
            theme = 'dark'
        }
    }
    
    if (isMobile) return (<a onClick={() => {
        switchTheme()
        onClick()
    }}>Switch Theme</a>)
    else return (
        <a className='nav-link' onClick={() => switchTheme()}>
            <svg height="512" viewBox="0 0 512 512" width="512"><g><path d="m271.102 408.674c-10.759 2.896-21.518 4.364-31.976 4.364-67.78 0-122.924-55.143-122.924-122.923 0-20.075 4.751-39.286 14.123-57.099 2.776-5.277 2.163-11.697-1.562-16.354-3.725-4.656-9.854-6.666-15.612-5.114-66.622 17.93-113.151 78.596-113.151 147.528 0 84.323 68.602 152.924 152.924 152.924 56.927 0 108.791-31.366 135.352-81.858 2.776-5.277 2.163-11.697-1.562-16.354-3.726-4.656-9.853-6.664-15.612-5.114zm-118.178 73.326c-67.78 0-122.924-55.144-122.924-122.924 0-44.253 23.869-84.269 60.772-105.922-3.018 12.074-4.57 24.51-4.57 36.961 0 84.322 68.602 152.923 152.924 152.923 1.191 0 2.386-.015 3.582-.045-22.917 24.588-55.187 39.007-89.784 39.007z" /><path d="m318.096 295.712 38.904-11.849 38.902 11.85c1.442.439 2.913.652 4.369.652 4.621 0 9.086-2.141 11.97-5.96l24.509-32.445 38.422-13.301c5.938-2.056 9.965-7.595 10.09-13.878l.804-40.658 23.242-33.367c3.589-5.152 3.589-11.995 0-17.147l-23.242-33.365-.803-40.657c-.124-6.283-4.151-11.823-10.09-13.878l-38.422-13.302-24.507-32.447c-3.794-5.022-10.32-7.143-16.34-5.308l-38.904 11.85-38.901-11.85c-6.022-1.834-12.547.286-16.34 5.308l-24.509 32.445-38.422 13.301c-5.938 2.056-9.965 7.595-10.09 13.878l-.804 40.658-23.242 33.367c-3.589 5.152-3.589 11.995 0 17.147l23.242 33.364.803 40.658c.124 6.283 4.151 11.823 10.09 13.878l38.422 13.302 24.508 32.446c3.794 5.022 10.318 7.142 16.339 5.308zm-19.66-59.476c-1.793-2.374-4.251-4.161-7.062-5.134l-32.85-11.373-.686-34.747c-.059-2.964-.994-5.845-2.689-8.278l-19.868-28.522 19.869-28.524c1.695-2.433 2.63-5.313 2.689-8.277l.687-34.748 32.85-11.372c2.811-.973 5.27-2.76 7.062-5.134l20.943-27.725 33.249 10.128c2.85.868 5.893.868 8.742 0l33.25-10.128 20.943 27.726c1.793 2.374 4.251 4.161 7.062 5.134l32.85 11.373.686 34.747c.059 2.964.994 5.845 2.689 8.278l19.869 28.522-19.869 28.524c-1.695 2.433-2.63 5.313-2.689 8.277l-.687 34.747-32.85 11.372c-2.811.973-5.27 2.76-7.062 5.134l-20.943 27.725-33.249-10.128c-1.425-.434-2.898-.651-4.371-.651s-2.946.217-4.371.651l-33.25 10.127z" /><path d="m437 148.183c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80zm-130 0c0-27.57 22.43-50 50-50s50 22.43 50 50-22.43 50-50 50-50-22.43-50-50z" /><path d="m467.606 325.394c-5.857-5.858-15.355-5.858-21.213 0l-40 40c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.858 21.213 0l12.891-12.891c-8.444 49.49-51.636 87.284-103.497 87.284h-20c-8.284 0-15 6.716-15 15s6.716 15 15 15h20c69.254 0 126.484-52.42 134.124-119.663l15.27 15.27c2.928 2.929 6.767 4.393 10.606 4.393s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213z" /><path d="m44.394 186.606c2.928 2.93 6.767 4.394 10.606 4.394s7.678-1.464 10.606-4.394l40-40c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-12.891 12.891c8.445-49.49 51.637-87.284 103.498-87.284h20c8.284 0 15-6.716 15-15s-6.716-15-15-15h-20c-69.254 0-126.484 52.42-134.124 119.663l-15.27-15.27c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213z" /></g></svg>
            <h3>Switch Theme</h3>
        </a>
    )
}