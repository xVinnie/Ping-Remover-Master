
module.exports = function PingRemove(dispatch) {

	function PingRemove(distance)	{
		dispatch.toServer('C_SET_VISIBLE_RANGE', {range: distance});
	}

    dispatch.hook('C_CHAT', 1, function(event) {
		let command = event.message.replace(/<\/?[^<>]*>/gi, '').split(' ')
		if(command[0] === '!range') {
			if (command.length > 1) {
				PingRemove(parseInt(command[1]))
			}
			return false;		
		}
	})

}
