/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DeveloperBoardLightningToolbox",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.5 2c.28 0 .5.22.5.5V4h1.5V2.5a.5.5 0 0 1 1 0V4H12V2.5a.5.5 0 0 1 1 0V4h.5A2.5 2.5 0 0 1 16 6.5V7h1.5a.5.5 0 0 1 0 1H16v1.05a2.51 2.51 0 0 0-.5-.05H15V6.5c0-.83-.67-1.5-1.5-1.5h-7C5.67 5 5 5.67 5 6.5v7c0 .83.67 1.5 1.5 1.5H9v1H8v1.5a.5.5 0 0 1-1 0V16h-.5A2.5 2.5 0 0 1 4 13.5V13H2.5a.5.5 0 0 1 0-1H4v-1.5H2.5a.5.5 0 0 1 0-1H4V8H2.5a.5.5 0 0 1 0-1H4v-.5A2.5 2.5 0 0 1 6.5 4H7V2.5c0-.28.22-.5.5-.5Zm3.54 9.04a2.5 2.5 0 0 1 1.42-1.81.4.4 0 0 0-.36-.23h-1.53l.42-1.46c.12-.44-.44-.73-.73-.39l-2.67 3.2a.4.4 0 0 0 .3.65h1.57l-.44 1.46a.4.4 0 0 0 .07.37 2.5 2.5 0 0 1 1.95-1.79ZM12 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z",
    FILLED : "M8 2.5a.5.5 0 0 0-1 0V4h-.5A2.5 2.5 0 0 0 4 6.5V7H2.5a.5.5 0 0 0 0 1H4v1.5H2.5a.5.5 0 0 0 0 1H4V12H2.5a.5.5 0 0 0 0 1H4v.5A2.5 2.5 0 0 0 6.5 16H7v1.5a.5.5 0 0 0 1 0V16h1v-2.5c0-.23.03-.45.09-.67a.4.4 0 0 1-.07-.37L9.46 11H7.9a.4.4 0 0 1-.3-.66l2.66-3.19c.3-.34.85-.05.73.39L10.57 9h1.53c.17 0 .3.1.36.23.32-.15.67-.23 1.04-.23h2c.17 0 .34.02.5.05V8h1.5a.5.5 0 0 0 0-1H16v-.5A2.5 2.5 0 0 0 13.5 4H13V2.5a.5.5 0 0 0-1 0V4h-1.5V2.5a.5.5 0 0 0-1 0V4H8V2.5Zm4 9.5v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z"
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