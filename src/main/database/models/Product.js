import { DataTypes } from '@sequelize/core';

const ProductModel = (sequelize) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        code: {
            type: DataTypes.STRING(6),
            unique: true,
            validate: {
                is: /^[A-Z0-9]{6}$/
            }
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true
        },
        priceSale: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        priceCost: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        currentStock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        minimumStock: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    Product.associate = (models) => {
        const StockMovement = models.get('StockMovement')
        Product.hasMany(StockMovement, { foreignKey: 'productId' })
    }
}

export default ProductModel