/**
 * @author : yusik
 * @date : 2018-12-20
 */

class User {
    constructor(build) {
        this.id = build.id;
        this.name = build.name;
        this.age = build.age;
    }

    static get Builder() {
        class Builder {
            constructor() {
            }

            setId(id) {
                this.id = id;
                return this;
            }

            setName(name) {
                this.name = name;
                return this;
            }

            setAge(age) {
                this.age = age;
                return this;
            }

            build() {
                return new User(this);
            }
        }

        return Builder;
    }
}

function test() {

    let builder = new User.Builder();
    let user = builder.setId(1).setName('jason').setAge(22).build();

    let builder2 = new User.Builder();
    let user2 = builder2.setId(2).setName('koh').build();

    console.log(user);
    console.log(user2);

}

test();