/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PeopleTeamToolbox",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.5 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-11 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM5 15h.1c.07.34.17.66.3.97A3 3 0 0 1 2 13V9.25C2 8.56 2.56 8 3.25 8h2.13c-.2.3-.33.63-.37 1H3.25a.25.25 0 0 0-.25.25V13c0 1.1.9 2 2 2Zm12-5.5c.5.37.84.91.96 1.54l.04.01v-1.8C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.63.37 1h1.76c.14 0 .25.11.25.25v.25Zm-1.5.5h-2c-.83 0-1.5.67-1.5 1.5v.5h-.5c-.83 0-1.5.67-1.5 1.5V15h2v-.5a.5.5 0 0 1 1 0v.5h3v-.5a.5.5 0 0 1 1 0v.5h2v-1.5c0-.83-.67-1.5-1.5-1.5H17v-.5c0-.83-.67-1.5-1.5-1.5ZM7.25 9a.25.25 0 0 0-.25.25V14a3 3 0 0 0 2 2.83v.67c0 .13.01.26.03.38A4 4 0 0 1 6 14V9.25C6 8.56 6.56 8 7.25 8h5.5c.6 0 1.1.43 1.22 1H7.25ZM13 12v-.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v.5h-3Zm4 4v.5a.5.5 0 0 1-1 0V16h-3v.5a.5.5 0 0 1-1 0V16h-2v1.5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5V16h-2Z",
    FILLED : "M12.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm5 .5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-13 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 9.25C6 8.56 6.56 8 7.25 8h5.5c.6 0 1.1.43 1.22 1h-.47a2.5 2.5 0 0 0-2.46 2.04A2.5 2.5 0 0 0 9 13.5v4c0 .13.01.26.03.38A4 4 0 0 1 6 14V9.25Zm11.96 1.8H18v-1.8C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.63.37 1h.51a2.5 2.5 0 0 1 2.46 2.04ZM5 9.24c0-.46.14-.9.38-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.4 2.97C5.14 15.37 5 14.7 5 14V9.25ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});