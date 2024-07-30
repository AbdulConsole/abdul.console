document.querySelector('.right').addEventListener(
  'click', () => {
        window.location.href = './../catalog.html';
  }
);



document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(target).classList.add('active');

      if (target === 'network') {
        getNetworkInfo();
      } else if (target === 'screen') {
        getScreenInfo();
      } else if (target === 'power') {
        getPowerInfo();
      }
    });
  });

  async function getNetworkInfo() {
    const networkContent = document.getElementById('network');
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    let ipAddress = 'N/A';
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      ipAddress = data.ip;
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }

    if (connection) {
      networkContent.innerHTML = `
                <p>IP Address: ${ipAddress}</p>
                <p>Effective Type: ${connection.effectiveType}</p>
                <p>Downlink: ${connection.downlink} Mb/s</p>
                <p>RTT: ${connection.rtt} ms</p>
            `;
    } else {
      networkContent.innerHTML = `
                <p>IP Address: ${ipAddress}</p>
                <p>Network Information API not supported.</p>
            `;
    }
  }

  function getScreenInfo() {
    const screenContent = document.getElementById('screen');
    screenContent.innerHTML = `
            <p>Screen Width: ${window.screen.width}px</p>
            <p>Screen Height: ${window.screen.height}px</p>
            <p>Available Width: ${window.screen.availWidth}px</p>
            <p>Available Height: ${window.screen.availHeight}px</p>
            <p>Color Depth: ${window.screen.colorDepth} bits</p>
            <p>Pixel Depth: ${window.screen.pixelDepth} bits</p>
        `;
  }

  function getPowerInfo() {
    const powerContent = document.getElementById('power');
    navigator.getBattery().then(battery => {
      powerContent.innerHTML = `
                <p>Battery Charging: ${battery.charging ? 'Yes' : 'No'}</p>
                <p>Battery Level: ${battery.level * 100}%</p>
                <p>Charging Time: ${battery.chargingTime} seconds</p>
                <p>Discharging Time: ${battery.dischargingTime} seconds</p>
            `;
    }).catch(err => {
      powerContent.innerHTML = '<p>Battery Status API not supported.</p>';
    });
  }

  // Initialize first tab content
  getScreenInfo();
});