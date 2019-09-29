const fields = {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
}

const defineModel = (sequelize, dataTypes) => {
    const sqlModel = sequelize.define('user', {
        [fields.id]: {
            type: dataTypes.UUID,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4
        },
        [fields.name]: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {notEmpty: true}
        },
        [fields.email]: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {notEmpty: true},
        },
        [fields.password]: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {notEmpty: true},
        },
    },
    {
        timestamps: true,

        indexes: [{
            unique: true,
            fields: ['email']
        }]
    })
}

defineModel.fields = fields;
defineModel.updateFields = [fields.name, fields.email, fields.password]
module.exports = defineModel;