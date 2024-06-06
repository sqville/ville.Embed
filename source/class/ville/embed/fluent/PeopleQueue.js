/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PeopleQueue",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M6.5 7.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm0-1a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM3 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4.5a3.5 3.5 0 1 1-7 0V9Zm1 0v4.5a2.5 2.5 0 0 0 5 0V9H4Zm5.63-2.86c-.1.31-.23.6-.4.87a2 2 0 0 1 1.08.48l.19.01a2.25 2.25 0 1 0-1.31-4.08c.19.28.34.6.44.94a1.25 1.25 0 0 1 2.12.89 1.25 1.25 0 0 1-2.12.9ZM9.5 16.85A3.5 3.5 0 0 0 14 13.5V9a1 1 0 0 0-1-1h-2.27A2 2 0 0 1 11 9h2v4.5a2.5 2.5 0 0 1-2.75 2.49c-.21.32-.47.6-.75.86Zm4.13-10.7c-.1.3-.23.6-.4.86a2 2 0 0 1 1.08.48l.19.01a2.25 2.25 0 1 0-1.31-4.08c.19.28.34.6.44.94a1.25 1.25 0 0 1 2.12.89 1.25 1.25 0 0 1-2.12.9Zm-.13 10.7A3.5 3.5 0 0 0 18 13.5V9a1 1 0 0 0-1-1h-2.27A2 2 0 0 1 15 9h2v4.5a2.5 2.5 0 0 1-2.75 2.49c-.21.32-.47.6-.75.86Z";
   var pathdfilled = "M8.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM4 8a1 1 0 0 0-1 1v4.5a3.5 3.5 0 1 0 7 0V9a1 1 0 0 0-1-1H4Zm5.75-2.75c0 .65-.2 1.26-.52 1.76a2 2 0 0 1 1.08.48l.19.01a2.25 2.25 0 1 0-1.31-4.08c.35.52.56 1.15.56 1.83Zm-.25 11.6A4.49 4.49 0 0 0 11 13.5V9a2 2 0 0 0-.27-1H13a1 1 0 0 1 1 1v4.5a3.5 3.5 0 0 1-4.5 3.35Zm4.25-11.6c0 .65-.2 1.26-.52 1.76a2 2 0 0 1 1.08.48l.19.01a2.25 2.25 0 1 0-1.31-4.08c.35.52.56 1.15.56 1.83Zm-.25 11.6A4.49 4.49 0 0 0 15 13.5V9a2 2 0 0 0-.27-1H17a1 1 0 0 1 1 1v4.5a3.5 3.5 0 0 1-4.5 3.35Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});