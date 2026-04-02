import { BaileysClass } from '../src/baileys.ts'; // Importando do SRC para não dar erro de "lib not found"

const botBaileys = new BaileysClass();

botBaileys.on('qr', (qr) => console.log("NOVO QR CODE: ", qr));
botBaileys.on('ready', () => console.log('🚀 MÁQUINA LIGADA: MONITORANDO FLASH DELIVERY JIPA 2'));

botBaileys.on('message', async (message) => {
    const grupoAlvo = "FLASH DELIVERY JIPA 2";

    // FILTRO 1: Nome exato do grupo
    if (message.groupName === grupoAlvo) {
        
        // FILTRO 2: É figurinha?
        // FILTRO 3: O número está nos seus contatos salvos? (isContact)
        if (message.type === 'sticker' && message.isContact) {
            
            // FILTRO 4: Resposta com REPRODUÇÃO (Destaque/Quoted)
            // Isso garante que você respondeu Àquela Figurinha específica
            await botBaileys.sendText(message.from, "Eu", { quoted: message });

            console.log(`✅ Pedido pego de: ${message.pushName}`);
        }
    }
});
