const file = await Deno.readTextFile("add.asm");

console.log(file.split("\n"));