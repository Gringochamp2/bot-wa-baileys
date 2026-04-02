import { BaileysClass } from '../src/baileys.ts';

const botBaileys = new BaileysClass();

botBaileys.on('qr', (qr) => console.log("NOVO QR CODE: ", qr));
botBaileys.on('ready', () => console.log('🚀 MÁQUINA LIGADA: MONITORANDO FLASH DELIVERY JIPA 2'));

botBaileys.on('message', async (message) => {
    // 1. LOG DE ENTRADA: Mostra no GitHub toda mensagem que o bot "escuta"
    console.log(`[!] Nova mensagem de: ${message.pushName} | Tipo: ${message.type} | Grupo: ${message.groupName || 'Privado'}`);

    // 2. FILTRO DE GRUPO: Verifica se a mensagem veio de um grupo
    if (message.groupName) {
        
        // Convertemos para minúsculo para evitar erro se o grupo mudar para "Flash" ou "flash"
        const nomeAlvo = "flash delivery jipa 2";
        const nomeRecebido = message.groupName.toLowerCase();

        // 3. COMPARAÇÃO: Se o nome do grupo contiver o que queremos
        if (nomeRecebido.includes(nomeAlvo)) {
            console.log(`✅ MENSAGEM NO GRUPO ALVO! Respondendo...`);

            // 4. RESPOSTA: Envia "Eu" citando a mensagem original (quoted)
            // Isso funciona para texto, imagem, figurinha, qualquer coisa.
            await botBaileys.sendText(message.from, "Eu", { quoted: message });

            console.log(`🟢 Respondido com sucesso para ${message.pushName}`);
        }
    }
});
