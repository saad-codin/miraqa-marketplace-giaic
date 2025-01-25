export default {
    customerSchema: {
      name: 'customer',
      type: 'document',
      title: 'Customer',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Customer Name',
          validation: (Rule) =>
            Rule.required().max(100).error('Customer name is required and cannot exceed 100 characters.'),
        },
        {
          name: 'contactInfo',
          type: 'string',
          title: 'Contact Info',
          validation: (Rule) =>
            Rule.required().min(10).max(15).error('Contact info must be between 10 and 15 characters.'),
        },
        {
          name: 'address',
          type: 'string',
          title: 'Address',
          validation: (Rule) =>
            Rule.required().max(250).error('Address is required and cannot exceed 250 characters.'),
        },
        {
          name: 'registrationDate',
          type: 'datetime',
          title: 'Registration Date',
          initialValue: () => new Date().toISOString(),
        },
        {
          name: 'orderHistory',
          type: 'array',
          title: 'Order History',
          of: [{ type: 'reference', to: [{ type: 'order' }] }],
        },
      ],
    },
    orderSchema: {
      name: 'order',
      type: 'document',
      title: 'Order',
      fields: [
        {
          name: 'product',
          type: 'reference',
          title: 'Product',
          to: [{ type: 'product' }],
          validation: (Rule) => Rule.required().error('Product is required.'),
        },
        {
          name: 'quantity',
          type: 'number',
          title: 'Quantity',
          validation: (Rule) => Rule.required().min(1).error('Quantity must be at least 1.'),
        },
        {
          name: 'customer',
          type: 'reference',
          title: 'Customer',
          to: [{ type: 'customer' }],
          validation: (Rule) => Rule.required().error('Customer is required.'),
        },
        {
          name: 'paymentMethod',
          type: 'string',
          title: 'Payment Method',
          validation: (Rule) => Rule.required().error('Payment method is required.'),
        },
        {
          name: 'orderStatus',
          type: 'string',
          title: 'Order Status',
          options: {
            list: [
              { title: 'Pending', value: 'pending' },
              { title: 'Shipped', value: 'shipped' },
              { title: 'Delivered', value: 'delivered' },
            ],
          },
          initialValue: 'pending',
          validation: (Rule) => Rule.required().error('Order status is required.'),
        },
        {
          name: 'timestamp',
          type: 'datetime',
          title: 'Order Timestamp',
          initialValue: () => new Date().toISOString(),
        },
      ],
    },
    shipmentSchema: {
      name: 'shipment',
      type: 'document',
      title: 'Shipment',
      fields: [
        {
          name: 'order',
          type: 'reference',
          title: 'Order',
          to: [{ type: 'order' }],
          validation: (Rule) => Rule.required().error('Order is required.'),
        },
        {
          name: 'status',
          type: 'string',
          title: 'Shipment Status',
          options: {
            list: [
              { title: 'Pending', value: 'pending' },
              { title: 'In Transit', value: 'inTransit' },
              { title: 'Delivered', value: 'delivered' },
            ],
          },
          initialValue: 'pending',
          validation: (Rule) => Rule.required().error('Shipment status is required.'),
        },
        {
          name: 'deliveryZone',
          type: 'reference',
          title: 'Delivery Zone',
          to: [{ type: 'deliveryZone' }],
          validation: (Rule) => Rule.required().error('Delivery zone is required.'),
        },
        {
          name: 'assignedDriver',
          type: 'reference',
          title: 'Assigned Driver',
          to: [{ type: 'driver' }],
          validation: (Rule) => Rule.required().error('Driver is required.'),
        },
      ],
    },
    deliveryZoneSchema: {
      name: 'deliveryZone',
      type: 'document',
      title: 'Delivery Zone',
      fields: [
        {
          name: 'zoneName',
          type: 'string',
          title: 'Zone Name',
          validation: (Rule) => Rule.required().max(100).error('Zone name is required and cannot exceed 100 characters.'),
        },
        {
          name: 'coverageArea',
          type: 'text',
          title: 'Coverage Area',
          validation: (Rule) => Rule.required().max(500).error('Coverage area is required and cannot exceed 500 characters.'),
        },
      ],
    },
    driverSchema: {
      name: 'driver',
      type: 'document',
      title: 'Driver',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Driver Name',
          validation: (Rule) => Rule.required().max(100).error('Driver name is required and cannot exceed 100 characters.'),
        },
        {
          name: 'contactInfo',
          type: 'string',
          title: 'Driver Contact Info',
          validation: (Rule) => Rule.required().min(10).max(15).error('Contact info must be between 10 and 15 characters.'),
        },
        {
          name: 'assignedDeliveries',
          type: 'array',
          title: 'Assigned Deliveries',
          of: [{ type: 'reference', to: [{ type: 'shipment' }] }],
        },
      ],
    },
  };
  