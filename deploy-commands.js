const { REST, Routes, SlashCommandBuilder } = require("discord.js");
require("dotenv").config();

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const commands = [
    // Nomes devem ser minúsculos e sem acento/espaço
    new SlashCommandBuilder().setName("nenem").setDescription("Neném"),
    new SlashCommandBuilder().setName("fofinha").setDescription("Fofinha"),
    new SlashCommandBuilder().setName("cuti-cuti").setDescription("Cuti cuti"),
    new SlashCommandBuilder().setName("bubuzinha").setDescription("Bubuzinha"),
    new SlashCommandBuilder().setName("sobre-a-bubis").setDescription("Sobre a bubis"),
    new SlashCommandBuilder().setName("cammy").setDescription("Cammy"),
    new SlashCommandBuilder().setName("seu-dono").setDescription("Seu dono"),
    new SlashCommandBuilder().setName("cadelinha").setDescription("Cadelinha")    
].map(cmd => cmd.toJSON());

const rest = new REST({ version: "10" }).setToken(TOKEN);

module.exports = async () => {
    try {
        console.log("Registrando comandos...");
        await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            { body: commands }
        );
        console.log("Comandos registrados com sucesso!");
    } catch (error) {
        console.error("Erro ao registrar comandos:", error);
    }
};
