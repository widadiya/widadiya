import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { UserRole } from '../../enums/role.enum';

@Injectable()
export class UserRoleValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!Object.values(UserRole).includes(value.role)) {
      throw new BadRequestException(`${value.role} is not a valid role`)
    }
    return value;
  }
}
