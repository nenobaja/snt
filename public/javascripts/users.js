function ngUsers(nga) {
    
        var user = nga.entity('users').identifier(nga.field('id'));
    
        user.listView()
            .title("users")
            .fields([
                nga.field('id','number'),
                nga.field('firstName'),
                nga.field('surname'),
                nga.field('age','number'),
                nga.field('gender'),
            ]).listActions(['edit', 'show']);
     
            user.showView()
            .fields([
                nga.field('id','number'),
                nga.field('firstName'),
                nga.field('surname'),
                nga.field('age','number'),
                nga.field('gender'),
            ]);
     
    
        return user;
    }