export const state = () =>({
    memo:[],
    page:0,
})
export const mutations = {
    insert:function(state, obj){
        var d = new Date();
        var fmt = d.getFullYear() + '_' + (d.getMonth()+1) + '_' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
        state.memo.unshift({
            title: obj.title,
            content: obj.content,
            created: fmt
        });
    },
    set_page:function(state,p){
        state.page = p; //引数のページ数をステートに保存する
    },
    remove: function(state, obj){
        var num = 0;
        for(let i=0; i<state.memo.length; i++){
            const ob = state.memo[i];
            if(ob.title == obj.title && ob.contetnt == obj.contetnt && ob.created == obj.created){
                alert('remove it ! --' + ob.title);
                state.memo.splice(i, 1);
                return;
            }
        }
    },
}