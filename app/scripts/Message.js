(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        Message.all = messages;

        Message.getByRoomId = function(roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        }

        Message.send = function(newMessage, roomId, user) {
            messages.$add({
              content: newMessage,
              roomId: roomId,
              username: user,
              sentAt: firebase.database.ServerValue.TIMESTAMP
            });

      }

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
