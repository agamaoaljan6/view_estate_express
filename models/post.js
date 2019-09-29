const fields = {
    id: 'id',
    title: 'title',
    address: 'address',
    price: 'price',
    image: 'image',
    description: 'description',
    userId: 'user_id'
}

const defineModel = (sequelize, dataTypes) => {
    const sqlModel = sequelize.define('post', {
        [fields.id]: {
            type: dataTypes.UUID,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4,
        },
        [fields.title]: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        [fields.address]: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        [fields.price]: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        [fields.image]: {
            type: dataTypes.STRING,
            allowNull: true,
        },
        [fields.description]: {
            type: dataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        timestamps: true
    })

    sqlModel.associate = models => {
        sqlModel.belongsTo(models.user, {foreignKey: fields.userId})
    }

    return sqlModel
}

defineModel.fields = fields;
defineModel.updateFields = [fields.title, fields.address, fields.price, fields.image, fields.description];
moduel.exports = defineModel;