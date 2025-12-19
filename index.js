// AQUI: Carrega as variáveis de ambiente antes de tudo
require("dotenv").config(); 

const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");
const registerCommands = require("./deploy-commands.js");

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Executa o registro ao iniciar (opcional, mas garante atualização)
registerCommands();

client.once("ready", () => {
    console.log(`Bot conectado como ${client.user.tag}`);

    // AQUI: Adicionei o timezone para garantir que saia no horário do Brasil
    // Formato: cron.schedule(tempo, função, opções)
    
    cron.schedule("0 12 * * *", async () => {
        try {
            const channel = await client.channels.fetch(CHANNEL_ID);
            if (channel) channel.send("Neném eu te amo, você é a minha fofinha do pezinho e da mãozinha cuti cuti.");
        } catch (error) {
            console.error("Erro ao enviar mensagem das 12h:", error);
        }
    }, { timezone: "America/Sao_Paulo" });

    cron.schedule("40 15 * * *", async () => {
        try {
            const channel = await client.channels.fetch(CHANNEL_ID);
            if (channel) channel.send("Princesa linda, flor do meu jardim do amor. Eu te amo.");
        } catch (error) {
            console.error("Erro ao enviar mensagem das 15:40:", error);
        }
    }, { timezone: "America/Sao_Paulo" });

    cron.schedule("0 19 * * *", async () => {
        try {
            const channel = await client.channels.fetch(CHANNEL_ID);
            if (channel) channel.send("Bunda grande gostosa da minha vida, eu te amo.");
        } catch (error) {
            console.error("Erro ao enviar mensagem das 19h:", error);
        }
    }, { timezone: "America/Sao_Paulo" });
});

client.on("interactionCreate", async interaction => {
    if (!interaction.isChatInputCommand()) return;

    // AQUI: As comparações agora usam os nomes corrigidos (minúsculos/sem espaço)
    
    if (interaction.commandName === "nenem") {
        await interaction.reply("Minha neném linda, adoro esse teu pezinho fofinho e essa mãozinha delicada. Quero beijar muito eles, massagear muito seu pezinho, segurar a sua mão o dia inteiro e mostrar que você é somente minha.");
    }

    if (interaction.commandName === "fofinha") {
        await interaction.reply("Vamos passear no Shopping toda semana, você ama isso e eu também amei passear com você, minha bebe fofinha cuti cuti. Minha paixão.");
    }

    if (interaction.commandName === "cuti-cuti") {
        await interaction.reply("Amo seu carinho, seu sorrisinho de dentinho, seu cafuné me deixa nas nuvens. Não quero te perder nunca.");
    }

    if (interaction.commandName === "bubuzinha") {
        await interaction.reply("Eu quero cuidar de você, quero massagear seus pés, suas pernas, quero deixar você relaxada nas nuvens. Quero te abraçar, alisar suas costas, beijar seu pescoço, cheirar seu cabelo e beijar muito sua boca linda");
    }

    if (interaction.commandName === "sobre-a-bubis") {
        await interaction.reply("Bubis tem 5 gatos: Neo, Nami, Niquinho e Nilson e eu.");
    }

    if (interaction.commandName === "cammy") {
        await interaction.reply("sou a Cammy dele.");
    }

    if (interaction.commandName === "seu-dono") {
        await interaction.reply("Minha garota obediente.");
    }

    if (interaction.commandName === "cadelinha") {
        await interaction.reply("Amo sua bunda grande gostosa com um fiozinho enfiado nela. Eu quero bater e apertar ela até ficar a marca da minha mão. Amo ver você rebolando e balançando esse rabão enorme.");
    }
});

client.login(TOKEN);
