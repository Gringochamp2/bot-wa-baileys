import { BaileysClass } from '../src/baileys.ts';

const botBaileys = new BaileysClass();

botBaileys.on('qr', (qr) => console.log("NOVO QR CODE: ", qr));
botBaileys.on('ready', () => console.log('🚀 MÁQUINA LIGADA: MONITORANDO FLASH DELIVERY JIPA 2'));

botBaileys.on('message', async (message) => {
    const grupoAlvo = "FLASH DELIVERY JIPA 2";

    if (message.groupName === grupoAlvo) {
        
        // FILTRO 2: É figurinha?
        // FILTRO 3: O número está nos seus contatos salvos?
        if (message.type === 'sticker' && message.isContact) {
            
            // FILTRO 4: Resposta com REPRODUÇÃO (Destaque/Quoted)
            // Corrigido: Removido o '#' que estava após 'message'
            await botBaileys.sendText(message.from, "Eu", { quoted: message });

            console.log(`✅ Pedido pego de: ${message.pushName}`);
        }
    }
});
