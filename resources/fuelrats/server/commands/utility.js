/// <reference types="@altv/types-server" />
import alt from 'alt-server';
import { registerCmd } from '../systems/chat';

registerCmd('coords', '/coords | Returns current coordinates to chat and console.', player => {
    const coords = player.pos;
    player.send(JSON.stringify(coords));
    alt.emitClient(player, 'print', JSON.stringify(coords));
    console.log(coords);
});

registerCmd('players', '/players | Returns current player count.', player => {
    player.send(`Player Count: ${alt.Player.all.length}`);
});

registerCmd('dc', '/dc', player => {
    player.kick();
});
