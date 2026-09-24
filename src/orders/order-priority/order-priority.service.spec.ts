import { describe, it, expect, beforeEach } from '@jest/globals';
import { OrderPriorityService } from './order-priority.service';
import { OrderEntity } from '../entities/order.entity';

describe('OrderPriorityServiceTest', () => {
    let service: OrderPriorityService;

    beforeEach(() => {
        service = new OrderPriorityService();
    });

    it('returns normal priority for a pending order with quantity 1', () => {
        const orderMock = {
            status: 'pending',
            quantity: 1,
        } as OrderEntity;

        const result = service.classify(orderMock);

        expect(result).toStrictEqual({
            priority: 'normal',
            message: 'Order has normal priority',
        });
    });

    it('returns medium priority for a pending order with quantity 3', () => {
        const orderMock = {
            status: 'pending',
            quantity: 3,
        } as OrderEntity;

        const result = service.classify(orderMock);

        expect(result).toStrictEqual({
            priority: 'medium',
            message: 'Order has medium priority',
        });
    });

    it('returns high priority for a pending order with quantity 4', () => {
        const orderMock = {
            status: 'pending',
            quantity: 4,
        } as OrderEntity;

        const result = service.classify(orderMock);

        expect(result).toStrictEqual({
            priority: 'high',
            message: 'Prepare this order soon',
        });
    });

    it('returns completed priority for a ready order with quantity 5', () => {
        const orderMock = {
            status: 'ready',
            quantity: 5,
        } as OrderEntity;

        const result = service.classify(orderMock);

        expect(result).toStrictEqual({
            priority: 'completed',
            message: 'Order is ready',
        });
    });
});