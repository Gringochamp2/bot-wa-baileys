import { BaileysClass } from '../src/baileys.ts';

const botBaileys = new BaileysClass();

botBaileys.on('qr', (qr) => console.log("NOVO QR CODE: ", qr));
botBaileys.on('ready', () => console.log('🚀 MÁQUINA LIGADA: MONITORANDO FLASH DELIVERY JIPA 2'));

botBaileys.on('message', async (message) => {
    // FILTRO 1: Só responde se for figurinha (sticker)
    if (message.type === 'sticker') {
        
        // FILTRO 2: Verifica se a mensagem veio de um grupo
        if (message.groupName) {
            console.log(`[!] Figurinha detectada no grupo: ${message.groupName}`);

            // FILTRO 3: Nome do grupo (Deixei parcial para não errar por um espaço)
            if (message.groupName.includes("FLASH DELIVERY JIPA 2")) {
                await botBaileys.sendText(message.from, "Eu", { quoted: message });
                console.log(`✅ Pedido pego de: ${message.pushName}`);
            }
        }
    }
});
