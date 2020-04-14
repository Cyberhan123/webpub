import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import Axios from 'axios';
import cors from '@/swagger/cors';

export interface NavItem {
  link?: string;
  name?: string;
}

function setParam(distObject: any, key: string, param: any) {
  if (param !== undefined) distObject[key] = param;
}

export function createApi(axios: AxiosInstance = cors): ApiInstance {
  return {
    $axios: axios,
    dbController: {
      /**
       * createDb
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { string }[parameters.address] -
       * @param { string }[parameters.codeing] -
       * @param { string }[parameters.dataAccess] -
       * @param { string }[parameters.dbUser] -
       * @param { string }[parameters.dtype] -
       * @param { string }[parameters.name] -
       * @param { string }[parameters.password] -
       * @param { string }[parameters.ps] -
       */
      createDbUsingGET(parameters, config) {
        let path = `/v1/api/db/create`;
        let queryParams: any = {};
        let data: any = {};

        if (parameters !== undefined) {
          setParam(queryParams, 'address', parameters['address']);
          setParam(queryParams, 'codeing', parameters['codeing']);
          setParam(queryParams, 'dataAccess', parameters['dataAccess']);
          setParam(queryParams, 'db_user', parameters['dbUser']);
          setParam(queryParams, 'dtype', parameters['dtype']);
          setParam(queryParams, 'name', parameters['name']);
          setParam(queryParams, 'password', parameters['password']);
          setParam(queryParams, 'ps', parameters['ps']);
        }

        return axios.request({
          url: path,
          method: 'GET',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $createDbUsingGET(parameters, config) {
        return this.createDbUsingGET(parameters, config).then(
          res => res && res.data,
        );
      },
      /**
       * deleteFtp
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { number }[parameters.id] -
       * @param { string }[parameters.name] -
       */ deleteFtpUsingGET(parameters, config) {
        let path = `/v1/api/db/delete`;
        let queryParams: any = {};
        let data: any = {};

        if (parameters !== undefined) {
          setParam(queryParams, 'id', parameters['id']);
          setParam(queryParams, 'name', parameters['name']);
        }

        return axios.request({
          url: path,
          method: 'GET',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $deleteFtpUsingGET(parameters, config) {
        return this.deleteFtpUsingGET(parameters, config).then(
          res => res && res.data,
        );
      },
    },
    ftpController: {
      /**
       * createFtp
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { string }[parameters.ftpPassword] -
       * @param { string }[parameters.ftpUsername] -
       * @param { string }[parameters.path] -
       * @param { string }[parameters.ps] -
       */
      createFtpUsingGET(parameters, config) {
        let path = `/v1/api/ftp/create`;
        let queryParams: any = {};
        let data: any = {};

        if (parameters !== undefined) {
          setParam(queryParams, 'ftp_password', parameters['ftpPassword']);
          setParam(queryParams, 'ftp_username', parameters['ftpUsername']);
          setParam(queryParams, 'path', parameters['path']);
          setParam(queryParams, 'ps', parameters['ps']);
        }

        return axios.request({
          url: path,
          method: 'GET',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $createFtpUsingGET(parameters, config) {
        return this.createFtpUsingGET(parameters, config).then(
          res => res && res.data,
        );
      },
      /**
       * deleteFtp
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { number }[parameters.id] -
       * @param { string }[parameters.username] -
       */ deleteFtpUsingGET_1(parameters, config) {
        let path = `/v1/api/ftp/delete`;
        let queryParams: any = {};
        let data: any = {};

        if (parameters !== undefined) {
          setParam(queryParams, 'id', parameters['id']);
          setParam(queryParams, 'username', parameters['username']);
        }

        return axios.request({
          url: path,
          method: 'GET',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $deleteFtpUsingGET_1(parameters, config) {
        return this.deleteFtpUsingGET_1(parameters, config).then(
          res => res && res.data,
        );
      },
    },
    homeController: {
      /**
       * navList
       * @method
       * @param { object } config
       */
      navListUsingGET(config) {
        let path = `/v1/api/home/navList`;
        let queryParams: any = {};
        let data: any = {};

        return axios.request({
          url: path,
          method: 'GET',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $navListUsingGET(config) {
        return this.navListUsingGET(config).then(res => res && res.data);
      },
    },
    safeController: {
      /**
       * banIp
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { string }[parameters.port] -
       * @param { string }[parameters.ps] -
       * @param { string }[parameters.type] -
       */
      banIpUsingPOST(parameters, config) {
        let path = `/v1/api/safe/ip/ban`;
        let queryParams: any = {};
        let data: any = {};

        if (parameters !== undefined) {
          setParam(queryParams, 'port', parameters['port']);
          setParam(queryParams, 'ps', parameters['ps']);
          setParam(queryParams, 'type', parameters['type']);
        }

        return axios.request({
          url: path,
          method: 'POST',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $banIpUsingPOST(parameters, config) {
        return this.banIpUsingPOST(parameters, config).then(
          res => res && res.data,
        );
      },
      /**
       * addAccessPort
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { string }[parameters.port] -
       * @param { string }[parameters.ps] -
       * @param { string }[parameters.type] -
       */ addAccessPortUsingPOST(parameters, config) {
        let path = `/v1/api/safe/port/add`;
        let queryParams: any = {};
        let data: any = {};

        if (parameters !== undefined) {
          setParam(queryParams, 'port', parameters['port']);
          setParam(queryParams, 'ps', parameters['ps']);
          setParam(queryParams, 'type', parameters['type']);
        }

        return axios.request({
          url: path,
          method: 'POST',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $addAccessPortUsingPOST(parameters, config) {
        return this.addAccessPortUsingPOST(parameters, config).then(
          res => res && res.data,
        );
      },
      /**
       * getSshInfo
       * @method
       * @param { object } config
       */ getSshInfoUsingGET(config) {
        let path = `/v1/api/safe/ssh`;
        let queryParams: any = {};
        let data: any = {};

        return axios.request({
          url: path,
          method: 'GET',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $getSshInfoUsingGET(config) {
        return this.getSshInfoUsingGET(config).then(res => res && res.data);
      },
      /**
       * setSshPort
       * @method
       * @param { object } config
       * @param port -  */ setSshPortUsingPOST(port, config) {
        let path = `/v1/api/safe/ssh`;
        let queryParams: any = {};
        let data: any = {};

        setParam(queryParams, 'port', port);

        return axios.request({
          url: path,
          method: 'POST',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $setSshPortUsingPOST(port, config) {
        return this.setSshPortUsingPOST(port, config).then(
          res => res && res.data,
        );
      },
    },
    webSiteController: {
      /**
       * createSiteBackup
       * @method
       * @param { object } config
       * @param id -  */
      createSiteBackupUsingPOST(id, config) {
        let path = `/v1/api/site/backup/create`;
        let queryParams: any = {};
        let data: any = {};

        setParam(queryParams, 'id', id);

        return axios.request({
          url: path,
          method: 'POST',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $createSiteBackupUsingPOST(id, config) {
        return this.createSiteBackupUsingPOST(id, config).then(
          res => res && res.data,
        );
      },
      /**
       * deleteSiteBackup
       * @method
       * @param { object } config
       * @param id -  */ deleteSiteBackupUsingPOST(id, config) {
        let path = `/v1/api/site/backup/delete`;
        let queryParams: any = {};
        let data: any = {};

        setParam(queryParams, 'id', id);

        return axios.request({
          url: path,
          method: 'POST',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $deleteSiteBackupUsingPOST(id, config) {
        return this.deleteSiteBackupUsingPOST(id, config).then(
          res => res && res.data,
        );
      },
      /**
       * listSiteBackup
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { string }[parameters.limit] -
       * @param { string }[parameters.limit] -
       * @param { string }[parameters.order] -
       * @param { string }[parameters.order] -
       * @param { string }[parameters.p] -
       * @param { string }[parameters.p] -
       * @param { string }[parameters.search] -
       * @param { string }[parameters.search] -
       * @param { string }[parameters.table] -
       * @param { string }[parameters.table] -
       * @param { string }[parameters.tojs] -
       * @param { string }[parameters.tojs] -
       * @param { string }[parameters.type] -
       * @param { string }[parameters.type] -
       */ listSiteBackupUsingPOST(parameters, config) {
        let path = `/v1/api/site/backup/list`;
        let queryParams: any = {};
        let data: any = {};

        if (parameters !== undefined) {
          setParam(queryParams, 'limit', parameters['limit']);
          setParam(queryParams, 'limit', parameters['limit']);
          setParam(queryParams, 'order', parameters['order']);
          setParam(queryParams, 'order', parameters['order']);
          setParam(queryParams, 'p', parameters['p']);
          setParam(queryParams, 'p', parameters['p']);
          setParam(queryParams, 'search', parameters['search']);
          setParam(queryParams, 'search', parameters['search']);
          setParam(queryParams, 'table', parameters['table']);
          setParam(queryParams, 'table', parameters['table']);
          setParam(queryParams, 'tojs', parameters['tojs']);
          setParam(queryParams, 'tojs', parameters['tojs']);
          setParam(queryParams, 'type', parameters['type']);
          setParam(queryParams, 'type', parameters['type']);
        }

        return axios.request({
          url: path,
          method: 'POST',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $listSiteBackupUsingPOST(parameters, config) {
        return this.listSiteBackupUsingPOST(parameters, config).then(
          res => res && res.data,
        );
      },
      /**
       * createSite
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { string }[parameters.codeing] -
       * @param { boolean }[parameters.ftp] -
       * @param { string }[parameters.ftpPassword] -
       * @param { string }[parameters.ftpUsername] -
       * @param { string }[parameters.path] -
       * @param { number }[parameters.port] -
       * @param { string }[parameters.ps] -
       * @param { boolean }[parameters.sql] -
       * @param { string }[parameters.type] -
       * @param { number }[parameters.typeId] -
       * @param { string }[parameters.version] -
       * @param { string }[parameters.webname] -
       */ createSiteUsingPOST(parameters, config) {
        let path = `/v1/api/site/create`;
        let queryParams: any = {};
        let data: any = {};

        if (parameters !== undefined) {
          setParam(queryParams, 'codeing', parameters['codeing']);
          setParam(queryParams, 'ftp', parameters['ftp']);
          setParam(queryParams, 'ftp_password', parameters['ftpPassword']);
          setParam(queryParams, 'ftp_username', parameters['ftpUsername']);
          setParam(queryParams, 'path', parameters['path']);
          setParam(queryParams, 'port', parameters['port']);
          setParam(queryParams, 'ps', parameters['ps']);
          setParam(queryParams, 'sql', parameters['sql']);
          setParam(queryParams, 'type', parameters['type']);
          setParam(queryParams, 'type_id', parameters['typeId']);
          setParam(queryParams, 'version', parameters['version']);
          setParam(queryParams, 'webname', parameters['webname']);
        }

        return axios.request({
          url: path,
          method: 'POST',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $createSiteUsingPOST(parameters, config) {
        return this.createSiteUsingPOST(parameters, config).then(
          res => res && res.data,
        );
      },
      /**
       * deleteSite
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { string }[parameters.database] -
       * @param { string }[parameters.ftp] -
       * @param { number }[parameters.id] -
       * @param { string }[parameters.path] -
       * @param { string }[parameters.webname] -
       */ deleteSiteUsingPOST(parameters, config) {
        let path = `/v1/api/site/delete`;
        let queryParams: any = {};
        let data: any = {};

        if (parameters !== undefined) {
          setParam(queryParams, 'database', parameters['database']);
          setParam(queryParams, 'ftp', parameters['ftp']);
          setParam(queryParams, 'id', parameters['id']);
          setParam(queryParams, 'path', parameters['path']);
          setParam(queryParams, 'webname', parameters['webname']);
        }

        return axios.request({
          url: path,
          method: 'POST',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $deleteSiteUsingPOST(parameters, config) {
        return this.deleteSiteUsingPOST(parameters, config).then(
          res => res && res.data,
        );
      },
      /**
       * editSiteDesc
       * @method
       * @param { object } config
       */ editSiteDescUsingPOST(config) {
        let path = `/v1/api/site/desc`;
        let queryParams: any = {};
        let data: any = {};

        return axios.request({
          url: path,
          method: 'POST',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $editSiteDescUsingPOST(config) {
        return this.editSiteDescUsingPOST(config).then(res => res && res.data);
      },
      /**
       * getSiteList
       * @method
       * @param { object } config
       */ getSiteListUsingGET(config) {
        let path = `/v1/api/site/list`;
        let queryParams: any = {};
        let data: any = {};

        return axios.request({
          url: path,
          method: 'GET',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $getSiteListUsingGET(config) {
        return this.getSiteListUsingGET(config).then(res => res && res.data);
      },
      /**
       * startSite
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { number }[parameters.id] -
       * @param { string }[parameters.name] -
       */ startSiteUsingPOST(parameters, config) {
        let path = `/v1/api/site/start`;
        let queryParams: any = {};
        let data: any = {};

        if (parameters !== undefined) {
          setParam(queryParams, 'id', parameters['id']);
          setParam(queryParams, 'name', parameters['name']);
        }

        return axios.request({
          url: path,
          method: 'POST',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $startSiteUsingPOST(parameters, config) {
        return this.startSiteUsingPOST(parameters, config).then(
          res => res && res.data,
        );
      },
      /**
       * stopSite
       * @method
       * @param { object } parameters
       * @param { object } config
       * @param { number }[parameters.id] -
       * @param { string }[parameters.name] -
       */ stopSiteUsingPOST(parameters, config) {
        let path = `/v1/api/site/stop`;
        let queryParams: any = {};
        let data: any = {};

        if (parameters !== undefined) {
          setParam(queryParams, 'id', parameters['id']);
          setParam(queryParams, 'name', parameters['name']);
        }

        return axios.request({
          url: path,
          method: 'POST',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $stopSiteUsingPOST(parameters, config) {
        return this.stopSiteUsingPOST(parameters, config).then(
          res => res && res.data,
        );
      },
    },
    watchController: {
      /**
       * total
       * @method
       * @param { object } config
       */
      totalUsingGET(config) {
        let path = `/v1/api/watch/total`;
        let queryParams: any = {};
        let data: any = {};

        return axios.request({
          url: path,
          method: 'GET',
          params: queryParams,
          data: data,
          ...config,
        });
      },

      $totalUsingGET(config) {
        return this.totalUsingGET(config).then(res => res && res.data);
      },
    },
  };
}

interface Core {
  $axios: AxiosInstance;
}

interface dbControllerResource {
  createDbUsingGET(
    parameters?: {
      address?: string;
      codeing?: string;
      dataAccess?: string;
      dbUser?: string;
      dtype?: string;
      name?: string;
      password?: string;
      ps?: string;
    },
    config?: AxiosRequestConfig,
  ): AxiosPromise<string>;

  $createDbUsingGET(
    parameters?: {
      address?: string;
      codeing?: string;
      dataAccess?: string;
      dbUser?: string;
      dtype?: string;
      name?: string;
      password?: string;
      ps?: string;
    },
    config?: AxiosRequestConfig,
  ): Promise<string>;

  deleteFtpUsingGET(
    parameters?: {
      id?: number;
      name?: string;
    },
    config?: AxiosRequestConfig,
  ): AxiosPromise<string>;

  $deleteFtpUsingGET(
    parameters?: {
      id?: number;
      name?: string;
    },
    config?: AxiosRequestConfig,
  ): Promise<string>;
}

interface ftpControllerResource {
  createFtpUsingGET(
    parameters?: {
      ftpPassword?: string;
      ftpUsername?: string;
      path?: string;
      ps?: string;
    },
    config?: AxiosRequestConfig,
  ): AxiosPromise<string>;

  $createFtpUsingGET(
    parameters?: {
      ftpPassword?: string;
      ftpUsername?: string;
      path?: string;
      ps?: string;
    },
    config?: AxiosRequestConfig,
  ): Promise<string>;

  deleteFtpUsingGET_1(
    parameters?: {
      id?: number;
      username?: string;
    },
    config?: AxiosRequestConfig,
  ): AxiosPromise<string>;

  $deleteFtpUsingGET_1(
    parameters?: {
      id?: number;
      username?: string;
    },
    config?: AxiosRequestConfig,
  ): Promise<string>;
}

interface homeControllerResource {
  navListUsingGET(config?: AxiosRequestConfig): AxiosPromise<Array<NavItem>>;

  $navListUsingGET(config?: AxiosRequestConfig): Promise<Array<NavItem>>;
}

interface safeControllerResource {
  banIpUsingPOST(
    parameters?: {
      port?: string;
      ps?: string;
      type?: string;
    },
    config?: AxiosRequestConfig,
  ): AxiosPromise<string>;

  $banIpUsingPOST(
    parameters?: {
      port?: string;
      ps?: string;
      type?: string;
    },
    config?: AxiosRequestConfig,
  ): Promise<string>;

  addAccessPortUsingPOST(
    parameters?: {
      port?: string;
      ps?: string;
      type?: string;
    },
    config?: AxiosRequestConfig,
  ): AxiosPromise<string>;

  $addAccessPortUsingPOST(
    parameters?: {
      port?: string;
      ps?: string;
      type?: string;
    },
    config?: AxiosRequestConfig,
  ): Promise<string>;

  getSshInfoUsingGET(config?: AxiosRequestConfig): AxiosPromise<string>;

  $getSshInfoUsingGET(config?: AxiosRequestConfig): Promise<string>;

  setSshPortUsingPOST(
    port?: string,
    config?: AxiosRequestConfig,
  ): AxiosPromise<string>;

  $setSshPortUsingPOST(
    port?: string,
    config?: AxiosRequestConfig,
  ): Promise<string>;
}

interface webSiteControllerResource {
  createSiteBackupUsingPOST(
    id?: number,
    config?: AxiosRequestConfig,
  ): AxiosPromise<string>;

  $createSiteBackupUsingPOST(
    id?: number,
    config?: AxiosRequestConfig,
  ): Promise<string>;

  deleteSiteBackupUsingPOST(
    id?: number,
    config?: AxiosRequestConfig,
  ): AxiosPromise<string>;

  $deleteSiteBackupUsingPOST(
    id?: number,
    config?: AxiosRequestConfig,
  ): Promise<string>;

  listSiteBackupUsingPOST(
    parameters?: {
      limit?: string;
      limit?: string;
      order?: string;
      order?: string;
      p?: string;
      p?: string;
      search?: string;
      search?: string;
      table?: string;
      table?: string;
      tojs?: string;
      tojs?: string;
      type?: string;
      type?: string;
    },
    config?: AxiosRequestConfig,
  ): AxiosPromise<string>;

  $listSiteBackupUsingPOST(
    parameters?: {
      limit?: string;
      limit?: string;
      order?: string;
      order?: string;
      p?: string;
      p?: string;
      search?: string;
      search?: string;
      table?: string;
      table?: string;
      tojs?: string;
      tojs?: string;
      type?: string;
      type?: string;
    },
    config?: AxiosRequestConfig,
  ): Promise<string>;

  createSiteUsingPOST(
    parameters?: {
      codeing?: string;
      ftp?: boolean;
      ftpPassword?: string;
      ftpUsername?: string;
      path?: string;
      port?: number;
      ps?: string;
      sql?: boolean;
      type?: string;
      typeId?: number;
      version?: string;
      webname?: string;
    },
    config?: AxiosRequestConfig,
  ): AxiosPromise<string>;

  $createSiteUsingPOST(
    parameters?: {
      codeing?: string;
      ftp?: boolean;
      ftpPassword?: string;
      ftpUsername?: string;
      path?: string;
      port?: number;
      ps?: string;
      sql?: boolean;
      type?: string;
      typeId?: number;
      version?: string;
      webname?: string;
    },
    config?: AxiosRequestConfig,
  ): Promise<string>;

  deleteSiteUsingPOST(
    parameters?: {
      database?: string;
      ftp?: string;
      id?: number;
      path?: string;
      webname?: string;
    },
    config?: AxiosRequestConfig,
  ): AxiosPromise<string>;

  $deleteSiteUsingPOST(
    parameters?: {
      database?: string;
      ftp?: string;
      id?: number;
      path?: string;
      webname?: string;
    },
    config?: AxiosRequestConfig,
  ): Promise<string>;

  editSiteDescUsingPOST(config?: AxiosRequestConfig): AxiosPromise<string>;

  $editSiteDescUsingPOST(config?: AxiosRequestConfig): Promise<string>;

  getSiteListUsingGET(config?: AxiosRequestConfig): AxiosPromise<string>;

  $getSiteListUsingGET(config?: AxiosRequestConfig): Promise<string>;

  startSiteUsingPOST(
    parameters?: {
      id?: number;
      name?: string;
    },
    config?: AxiosRequestConfig,
  ): AxiosPromise<string>;

  $startSiteUsingPOST(
    parameters?: {
      id?: number;
      name?: string;
    },
    config?: AxiosRequestConfig,
  ): Promise<string>;

  stopSiteUsingPOST(
    parameters?: {
      id?: number;
      name?: string;
    },
    config?: AxiosRequestConfig,
  ): AxiosPromise<string>;

  $stopSiteUsingPOST(
    parameters?: {
      id?: number;
      name?: string;
    },
    config?: AxiosRequestConfig,
  ): Promise<string>;
}

interface watchControllerResource {
  totalUsingGET(config?: AxiosRequestConfig): AxiosPromise<string>;

  $totalUsingGET(config?: AxiosRequestConfig): Promise<string>;
}

export interface ApiInstance extends Core {
  dbController: dbControllerResource;
  ftpController: ftpControllerResource;
  homeController: homeControllerResource;
  safeController: safeControllerResource;
  webSiteController: webSiteControllerResource;
  watchController: watchControllerResource;
}
