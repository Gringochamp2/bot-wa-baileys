import { BaileysClass } from '../src/baileys.ts'; // Mudamos de /lib/ para /src/

const botBaileys = new BaileysClass();

botBaileys.on('qr', (qr) => console.log("NOVO QR CODE: ", qr));
botBaileys.on('ready', () => console.log('🚀 MÁQUINA LIGADA: MONITORANDO FLASH DELIVERY JIPA 2'));

botBaileys.on('message', async (message) => {
    // FILTRO 1: Nome exato do grupo (Segurança total)
    const grupoAlvo = "FLASH DELIVERY JIPA 2";

    if (message.groupName === grupoAlvo) {
        
        // FILTRO 2: É figurinha? (Sticker)
        // FILTRO 3: O número está nos seus contatos salvos?
        if (message.type === 'sticker' && message.isContact) {
            
            // FILTRO 4: Resposta com REPRODUÇÃO (Destaque/Quoted)
            // Isso garante que o ADM veja que você marcou o pedido certo
            await botBaileys.sendText(message.from, "Eu", { quoted: message });

            console.log(`✅ Pedido pego de: ${message.pushName}`);
        }
    }
});
